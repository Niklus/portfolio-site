import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../services/email.service';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public name = '';
  public email = '';
  public message = '';

  public snackBar = {
    show: false,
    text: ''
  };

  constructor(
    private emailService: EmailService,
    private titleService: TitleService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Contact');
  }

  onSubmit(form:NgForm): void {
    /*
    *  Perform a second validation: HTML pattern 
    *  validation can be bypassed easily 
    */
    if (!this.validateEmail(this.email)) {
      this.email = 'INVALID';
    } else if(this.name && this.email && this.message) {
      this.sendMessage();
      form.reset();
    } else {
      this.showSnackBar('Missing value(s). Message not sent');
    } 
  }

  sendMessage(): void {
    this.emailService.sendEmail(this.params);
    this.showSnackBar('Your message has been sent');   
  }

  get params(): object {
    return  {
      name: this.name.trim(),
      email: this.email.trim(),
      message: this.message.trim(),
      contact_number: Math.random() * 100000 | 0
    }
  }

  showSnackBar(text:string) {
    
    this.snackBar = {
      show: true,
      text
    };

    setTimeout(() => { 
      this.snackBar.show = false
    }, 10000);
  }

  validateEmail(email:string): boolean {
    // This regex is too long find out how to split it.
    const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    return re.test(String(email).toLowerCase());
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../services/email.service';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  name = '';
  email = '';
  message = '';

  constructor(
    private router: Router,
    private emailService: EmailService,
    private titleService: TitleService
   ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Contact');
  }

  onSubmit(): void {
    /*
    *  Perform a second validation: HTML pattern 
    *  validation can be bypassed easily 
    */
    if (!this.validateEmail(this.email)) {
      this.email = 'INVALID';
    } else if(this.name && this.email && this.message) {
      this.sendMessage();
    } else {
      alert('Missing values(s). Message not sent');
    } 
  }

  sendMessage(): void {
    this.emailService.sendEmail(this.params);
    alert('Success! Your Message has been sent');   
    this.reloadComponent();
  }

  get params(): object {
    return  {
      name: this.name.trim().split(/\s+/).join(' '),
      email: this.email.trim(),
      message: this.message.trim().split(/\s+/).join(' '),
      contact_number: Math.random() * 100000 | 0
    }
  }

  reloadComponent(): void {
    // A hacky solution for realoading the component
    this.router.navigate(['/']).then(nav => {
      this.router.navigate(['/', 'contact']);
    });
  }

  validateEmail(email:string): boolean {
    // This regex is too long find out how to split it.
    const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    return re.test(String(email).toLowerCase());
  }
}

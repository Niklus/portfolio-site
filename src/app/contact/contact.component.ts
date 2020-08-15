import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TitleService } from '../services/title.service';
import { EmailService } from '../services/email.service';

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
    text: '',
    show: false
  };

  constructor(
    private titleService: TitleService,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Contact');
  }

  onSubmit(form: NgForm): void {
    /*
    *  Perform a second validation: HTML pattern
    *  validation can be bypassed easily
    */
    if (!this.validateEmail(this.email)) {
      this.email = ' '; // show an invalid email error on the form
    } else if (this.name && this.email && this.message) {
      this.sendEmail(this.params, form);
    } else {
      this.showSnackBar('Missing value(s). Message not sent');
    }
  }

  get params(): object {
    return  {
      name: this.name.trim(),
      email: this.email.trim(),
      message: this.message.trim(),
      contact_number: Math.random() * 100000 | 0
    };
  }

  showSnackBar(text: string) {

    this.snackBar = {
      show: true,
      text
    };

    setTimeout(() => {
      this.snackBar.show = false;
    }, 10000);
  }

  sendEmail(params: object, form: NgForm): void {

    form.reset();

    this.emailService.sendEmail(params)
      .then(res => {
        this.showSnackBar('Your message has been sent');
        console.log('SUCCESS!', res.status, res.text);
      }, error => {
        // Repopulate the form: good user experience
        form.setValue({
          name: params['name'],
          email: params['email'],
          message: params['message']
        });
        this.showSnackBar('Error, message not sent');
        console.log('FAILED...', error);
      });
  }

  validateEmail(email: string): boolean {
    // This regex is too long find out how to split it.
    const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}

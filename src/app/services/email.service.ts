import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
    emailjs.init('user_EmXFwT7SHBlr403Wk9vcc');
  }

  sendEmail(params): void {
    emailjs.send('gmail', 'contact_form', params)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
      }, error => {
        console.log('FAILED...', error);
      });
  }
}

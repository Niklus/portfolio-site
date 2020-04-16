import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  serviceId = 'gmail';
  templateId = 'contact_form';
  userId = 'user_EmXFwT7SHBlr403Wk9vcc';

  constructor() {
    emailjs.init(this.userId);
  }

  sendEmail(params: object): void {
    emailjs.send(this.serviceId, this.templateId, params)
      .then(res => {
        console.log('SUCCESS!', res.status, res.text);
      }, error => {
        console.log('FAILED...', error);
      });
  }
}

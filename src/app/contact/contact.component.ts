import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../services/document.service';
import { Router } from '@angular/router';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  name: string;
  email: string;
  message: string;

  constructor(
    private router: Router,
    private emailService: EmailService,
    private docService: DocumentService
   ) { }

  ngOnInit(): void {
    this.docService.updateDocTitle('Contact');
  }

  onSubmit(): void {
    if (!this.validateEmail(this.email)) {
      this.email = '';
    } else if(this.name && this.email && this.message) {
      this.sendMessage();
    } 
  }

  sendMessage(): void {

    const name = this.name.trim()
      .split(/\s+/).join(' ');

    const email = this.email.trim();
    const message = this.message.trim();
    const contact_number = Math.random() * 100000 | 0;

    const params = {
      name, 
      email,
      message,
      contact_number
    };

    this.emailService.sendEmail(params);

    alert('Success! Your Message has been sent');
    
    this.realodComponent();
  }

  realodComponent(): void {
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

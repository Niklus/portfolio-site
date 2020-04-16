import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private title: Title) { }
  
  setTitle(title): void {
    this.title.setTitle(`${title} - Nicholas Otieno Portfolio`);
  }
}

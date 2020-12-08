import { Component, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';
import projects from './projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects = projects;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Projects');
  }
}

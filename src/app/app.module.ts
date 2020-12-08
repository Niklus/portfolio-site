import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    ProjectsComponent,
    ContactComponent,
    SnackBarComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

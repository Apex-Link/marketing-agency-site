import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CaseStudiesComponent } from './pages/case-studies/case-studies.component';
import { BlogComponent } from './pages/blog/blog.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(BrowserModule, RouterModule)]
};

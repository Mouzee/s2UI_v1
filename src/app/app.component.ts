import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/layout/header/header.component';
import { IntroComponent } from './components/pages/home/intro/intro.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { MobnavComponent } from './components/layout/mobnav/mobnav.component'; 
import { CtaComponent } from './components/pages/home/cta/cta.component';
import { ImagesliderComponent } from './components/pages/home/imageslider/imageslider.component';

import { AboutComponent } from './components/pages/about/about.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ServicesComponent } from './components/pages/services/services.component'; 
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { ClientelComponent } from './components/pages/clientel/clientel.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FormComponent } from './components/pages/contact/form/form.component';
import { MapComponent } from './components/pages/contact/map/map.component';

import { BaseComponent } from './components/layout/base/base.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ModalComponent } from './components/layout/modal/modal.component'; 



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, IntroComponent, NavComponent, MobnavComponent, CtaComponent, HomeComponent, ServicesComponent, GalleryComponent, ClientelComponent, ProjectsComponent, TestimonialsComponent, ImagesliderComponent, ContactComponent, FormComponent, MapComponent, BaseComponent, FooterComponent, ModalComponent, AboutComponent, BlogComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 's2UI_v1';
}

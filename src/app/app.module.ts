import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ImageComponent } from './gallery/image-list/image.component';
import { ImageService } from './services/image.service';
import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import {routes} from './app.routes';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminImageListComponent } from './admindashboard/admin-image-list/admin-image-list.component';
import { DashboardComponent } from './admindashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetailComponent,
    ContactComponent,
    AboutComponent,
    AdmindashboardComponent,
    AdminImageListComponent,
    DashboardComponent
  ],
  imports: [
    routes,
    BrowserModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
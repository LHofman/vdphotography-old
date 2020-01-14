import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos/photos.component';
import { PhotoComponent } from './components/photos/photo/photo.component';
import { PhotoDetailsComponent } from './components/photos/photo-details/photo-details.component';
import { PhotoService } from './services/photo.service';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    PhotoComponent,
    PhotoDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

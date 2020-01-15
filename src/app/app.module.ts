import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatGridListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FileSelectDirective } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos/photos.component';
import { PhotoComponent } from './components/photos/photo/photo.component';
import { PhotoDetailsComponent } from './components/photos/photo-details/photo-details.component';
import { PhotoService } from './services/photo.service';
import { AddPhotoComponent } from './components/photos/add-photo/add-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    PhotosComponent,
    PhotoComponent,
    PhotoDetailsComponent,
    AddPhotoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

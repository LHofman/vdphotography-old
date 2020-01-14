import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(public photoService: PhotoService) { }

  photos: Photo[];

  ngOnInit() {
    this.photoService.getPhotos().subscribe((data: []) => {
      this.photos = data.sort((p1: Photo, p2: Photo) => p1.name < p2.name ? -1 : 1);
    })
  }

  photo: Photo;

  onClick(event: Event, photo: Photo): void {
    this.photo = photo;
  }
}

import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  photos: Photo[] = [
    {
      id: "1",
      name: "Pichu",
      file: "Test"
    },
    {
      id: "2",
      name: "Pichu 2",
      file: "Test"
    }
  ];
  photo: Photo = {
    id: "1",
    name: "Pichu",
    file: "Test"
  }

  onClick(event: Event, photo: Photo): void {
    this.photo = photo;
  }
}

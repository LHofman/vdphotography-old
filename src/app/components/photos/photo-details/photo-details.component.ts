import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Photo } from '../photo';

const reader = new FileReader();

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
  @Input() photo: Photo;
  image: String;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    let data = changes.photo.currentValue;
    let typedArray = new Uint8Array(data.image.file.data);
    let stringChar = typedArray.reduce((data, byte) => data + String.fromCharCode(byte), '');
    let base64string = btoa(stringChar);
    this.image = "data:image/jpg;base64," + base64string;
  }

}

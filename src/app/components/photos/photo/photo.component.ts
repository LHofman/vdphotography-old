import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Photo } from '../photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input() photo: Photo;
  image: string;

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

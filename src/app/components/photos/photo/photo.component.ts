import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input() photo: Photo;

  constructor() { }

  ngOnInit() {
  }

}

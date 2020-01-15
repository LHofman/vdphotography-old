import { Component, OnInit } from '@angular/core';

import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { Photo } from '../photo';
import { PhotoService } from 'src/app/services/photo.service';

const URL = '/api/photos/upload';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'image'});
  constructor(public photoService: PhotoService) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = file => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      const photo = new Photo(item.file.name, JSON.parse(response).id);

      this.photoService.createPhoto(photo).subscribe(data => {
        alert('File uploaded successfully');
      });
    }
  }

}

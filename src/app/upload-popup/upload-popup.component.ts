import { Component } from '@angular/core';
import { ImportsModule } from '../imports';

@Component({
  selector: 'app-upload-popup',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: './upload-popup.component.html',
  styleUrl: './upload-popup.component.css'
})
export class UploadPopupComponent {

}

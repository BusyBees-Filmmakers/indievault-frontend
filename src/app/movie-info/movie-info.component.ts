import { Component, Input } from '@angular/core';
import { ImportsModule } from '../imports';


@Component({
  selector: 'app-movie-info',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent {
  @Input() movie: any;
}

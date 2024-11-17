import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ImportsModule } from '../imports';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ImportsModule, MovieInfoComponent, NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}

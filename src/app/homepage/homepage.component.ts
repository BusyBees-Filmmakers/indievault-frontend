import { Component, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { ImportsModule } from '../imports';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,ImportsModule, MovieInfoComponent,NavbarComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  sections = [
    {
      title: 'Selected for You',
      movies: [
        { title: 'Movie 1', info: 'Details about Movie 1' },
        { title: 'Movie 2', info: 'Details about Movie 2' },
        { title: 'Movie 3', info: 'Details about Movie 1' },
        { title: 'Movie 4', info: 'Details about Movie 2' },
        { title: 'Movie 5', info: 'Details about Movie 1' },
        { title: 'Movie 6', info: 'Details about Movie 2' },
        // Add more movies
      ],
    },
    {
      title: 'Horror',
      movies: [
        { title: 'Horror Movie 1', info: 'Details about Horror Movie 1' },
        { title: 'Horror Movie 2', info: 'Details about Horror Movie 2' },
        // Add more horror movies
      ],
    },
    // Add more sections with movies
  ];

  displayMovieDialog: boolean = false;
  selectedMovie: any = null;

  showMovieInfo(movie: any) {
    this.selectedMovie = movie;
    this.displayMovieDialog = true;
  }

  onDialogHide() {
    this.displayMovieDialog = false;
    this.selectedMovie = null;
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
}
}

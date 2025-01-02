import {Component, NgModule, OnInit} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { ImportsModule } from '../imports';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { NavbarComponent } from '../navbar/navbar.component';
import {Movie} from "../common/interface/movie";
import {MovieService} from "../service/movie/movie.service";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, ImportsModule, MovieInfoComponent, NavbarComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  movies: Movie[] = []
  displayMovieDialog: boolean = false;
  selectedMovie: any = null;

  constructor(private movieService: MovieService) {
    this.movies = this.movieService.getMovieDatabase();
  }

  showMovieInfo(movie: any) {
    this.selectedMovie = movie;
    this.displayMovieDialog = true;
  }

  onDialogHide() {
    this.displayMovieDialog = false;
    this.selectedMovie = null;
  }
}

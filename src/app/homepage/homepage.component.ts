import {Component} from '@angular/core';

import {CommonModule} from '@angular/common';
import {ImportsModule} from '../imports';
import {MovieInfoComponent} from '../movie-info/movie-info.component';
import {NavbarComponent} from '../navbar/navbar.component';
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
  sections: { genre: string, movies: Movie[] }[] = [ {
    genre: 'Selected for You',
    movies: this.getAllMoviesRandomOrder().slice(0, 5)
  },{
    genre: 'Action',
    movies: this.getAllMoviesRandomOrder()
  },{
    genre: 'Comedy',
    movies: this.getAllMoviesRandomOrder().slice(0, 4)
  },{
    genre: 'Drama',
    movies: this.getAllMoviesRandomOrder().slice(0, 5)
  },{
    genre: 'Horror',
    movies: this.getAllMoviesRandomOrder().slice(0, 4)
  },{
    genre: 'Romance',
    movies: this.getAllMoviesRandomOrder().slice(0, 4)
  },{
    genre: 'Scifi',
    movies: this.getAllMoviesRandomOrder().slice(0, 5)
  }]
  displayMovieDialog: boolean = false;
  selectedMovie: any = null;

  constructor(private movieService: MovieService) {
  }

  showMovieInfo(movie: any) {
    this.selectedMovie = movie;
    this.displayMovieDialog = true;
  }

  onDialogHide() {
    this.displayMovieDialog = false;
    this.selectedMovie = null;
  }

  getAllMoviesRandomOrder(): Movie[] {
    return this.movieService.getMovieDatabase().sort(() => Math.random() - 0.5);
  }
}

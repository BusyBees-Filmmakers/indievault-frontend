import { Component, OnInit } from '@angular/core';
import { ImportsModule } from '../imports';
import { UploadPopupComponent } from '../upload-popup/upload-popup.component';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { Movie } from '../common/interface/movie';
import { MovieService } from '../service/movie/movie.service';

@Component({
  selector: 'app-filmmaker-profile',
  standalone: true,
  imports: [ImportsModule, UploadPopupComponent, MovieInfoComponent, NavbarComponent],
  templateUrl: './filmmaker-profile.component.html',
  styleUrl: './filmmaker-profile.component.css',
})
export class FilmmakerProfileComponent implements OnInit {
  displayUploadPopup: boolean = false;
  displayMovieDialog: boolean = false;
  selectedMovie: any = null;
  sections: { genre: string, movies: Movie[] }[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.sections = [
      {
        genre: 'John\'s Movies',
        movies: this.movieService.getMovieDatabase().filter(movie => movie.filmmakerId === 101)
      }
    ];
  }

  showUploadPopup() {
    this.displayUploadPopup = true;
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

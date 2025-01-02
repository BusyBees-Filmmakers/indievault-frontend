import {Component, OnInit} from '@angular/core';
import {ImportsModule} from '../imports';
import {UploadPopupComponent} from '../upload-popup/upload-popup.component';
import {MovieInfoComponent} from '../movie-info/movie-info.component';
import {NavbarComponent} from "../navbar/navbar.component";
import {User} from "../common/interface/user";
import {UserService} from "../service/user/user.service";
import {MovieService} from "../service/movie/movie.service";
import {Movie} from "../common/interface/movie";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ImportsModule, UploadPopupComponent, MovieInfoComponent, NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  movies: Movie[] = [];
  displayMovieDialog: boolean = false;
  selectedMovie: any = null;
  displayUploadPopup: boolean = false;

  constructor(private userService: UserService, private movieService: MovieService) {
  }

  ngOnInit() {
    this.getCurrentUser().then(() => {
      if (this.user && this.user.subscriptionType === 'filmmaker') {
        this.movies.push(...this.movieService.getMoviesByFilmmakerId(this.user.id));
      }
    });
  }

  async getCurrentUser() {
    this.user = await this.userService.getCurrentUser() ?? null;
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

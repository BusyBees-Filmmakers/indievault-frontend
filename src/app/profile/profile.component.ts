import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { ImportsModule } from '../imports';
import { UploadPopupComponent } from '../upload-popup/upload-popup.component';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MovieService } from '../service/movie/movie.service';
import { Movie } from '../common/interface/movie';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ImportsModule,
    UploadPopupComponent,
    MovieInfoComponent,
    NavbarComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  displayUploadPopup: boolean = false;
  displayMovieDialog: boolean = false;
  selectedMovie: any = null;
  userName: string | null = null;
  userProfilePic: string | null = null;
  movies: Movie[] = [];
  isFilmmaker: boolean = false;

  constructor(private auth: Auth, private movieService: MovieService) {}

  ngOnInit(): void {
    onAuthStateChanged(this.auth, (user: User | null) => {
      if (user) {
        this.userName = user.displayName;
        this.userProfilePic = user.photoURL;
        const subscriptionPlan = localStorage.getItem(`subscription_plan_${user.uid}`);
        this.isFilmmaker = subscriptionPlan === 'Filmmaker';
        if (this.isFilmmaker) {
          this.movies = this.movieService.getMovieDatabase().filter((movie) => movie.filmmakerId === 102);
        }
      } else {
        console.log('No user is logged in');
      }
    });
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

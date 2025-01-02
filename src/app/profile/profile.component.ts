import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { ImportsModule } from '../imports';
import { UploadPopupComponent } from '../upload-popup/upload-popup.component';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MovieService } from '../service/movie/movie.service'; // Added to fetch movies
import { Movie } from '../common/interface/movie'; // Added movie interface

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

  showUploadPopup() {
    this.displayUploadPopup = true;
  }

  // User data from Google Auth
  userName: string | null = null;
  userProfilePic: string | null = null;

  movies: Movie[] = [];

  constructor(private auth: Auth, private movieService: MovieService) {}

  ngOnInit(): void {
    // Listen for user authentication state
    onAuthStateChanged(this.auth, (user: User | null) => {
      if (user) {
        this.userName = user.displayName; // Fetch user's name
        this.userProfilePic = user.photoURL; // Fetch user's profile picture
      } else {
        // If no user is logged in, handle accordingly (e.g., redirect to login page)
        console.log('No user is logged in');
      }
    });

    // Fetch movies from the MovieService
    this.movies = this.movieService.getMovieDatabase(); // Added to load movies
  }

  showMovieInfo(movie: any) { // Added to handle movie info dialog
    this.selectedMovie = movie;
    this.displayMovieDialog = true;
  }

  onDialogHide() {
    this.displayMovieDialog = false;
    this.selectedMovie = null;
  }
}

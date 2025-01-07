import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../common/interface/movie';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // Movies management
  private moviesSubject = new BehaviorSubject<Movie[]>([]);
  movies$ = this.moviesSubject.asObservable();

  // User profile management
  private userProfileSubject = new BehaviorSubject<{
    userName: string | null;
    userProfilePic: string | null;
    isFilmmaker: boolean;
  }>({
    userName: null,
    userProfilePic: null,
    isFilmmaker: false,
  });
  userProfile$ = this.userProfileSubject.asObservable();

  // Update movies
  updateMovies(movies: Movie[]) {
    this.moviesSubject.next(movies);
  }

  // Update user profile
  updateUserProfile(userProfile: {
    userName: string | null;
    userProfilePic: string | null;
    isFilmmaker: boolean;
  }) {
    this.userProfileSubject.next(userProfile);
  }
}

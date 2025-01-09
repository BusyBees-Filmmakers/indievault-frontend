import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsModule } from '../imports';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { Movie } from '../common/interface/movie';
import { SharedService } from '../service/shared/shared.service';
import { MovieService } from '../service/movie/movie.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, ImportsModule, MovieInfoComponent, NavbarComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  sections: { genre: string; movies: Movie[] }[] = [];
  originalSections: { genre: string; movies: Movie[] }[] = [];
  displayMovieDialog: boolean = false;
  selectedMovie: any = null;
  noResults: boolean = false;

  constructor(
    private sharedService: SharedService,
    private movieService: MovieService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.router.url.includes('home')) {
        this.showAllMovies();
      }
    });
  }

  ngOnInit() {
    // Initialize original sections with all movies
    this.originalSections = [
      {
        genre: 'Selected for You',
        movies: this.getAllMoviesRandomOrder(false).slice(0, 5),
      },
      {
        genre: 'Action',
        movies: this.getAllMoviesRandomOrder(true),
      },
      {
        genre: 'Comedy',
        movies: this.getAllMoviesRandomOrder(false).slice(0, 4),
      },
      {
        genre: 'Drama',
        movies: this.getAllMoviesRandomOrder(false).slice(0, 5),
      },
      {
        genre: 'Horror',
        movies: this.getAllMoviesRandomOrder(false).slice(0, 4),
      },
      {
        genre: 'Romance',
        movies: this.getAllMoviesRandomOrder(false).slice(0, 4),
      },
      {
        genre: 'Scifi',
        movies: this.getAllMoviesRandomOrder(false).slice(0, 5),
      },
    ];
    this.sections = [...this.originalSections];

    // Subscribe to shared service for updates
    this.sharedService.movies$.subscribe((filteredMovies) => {
      if (filteredMovies.length > 0) {
        // Show filtered movies if search matches
        this.noResults = false;
        this.sections = [
          {
            genre: 'Search Results',
            movies: filteredMovies,
          },
        ];
      } else if (this.noResults) {
        // Show "No Results" if no matches are found
        this.sections = [];
      } else {
        // Reset to original sections when no search query is active
        this.noResults = false;
        this.sections = [...this.originalSections];
      }
    });

    this.sharedService.noResults$.subscribe((noResults) => {
      this.noResults = noResults;
    });

    // Reset to default state on initial load
    this.sharedService.updateMovies([]);
    this.sharedService.updateNoResults(false);
  }

  showMovieInfo(movie: any) {
    this.selectedMovie = movie;
    this.displayMovieDialog = true;
  }

  onDialogHide() {
    this.displayMovieDialog = false;
    this.selectedMovie = null;
  }

  getAllMoviesRandomOrder(isAction: boolean): Movie[] {
    let movies = this.movieService.getMovieDatabase().sort(
      () => Math.random() - 0.5
    );
    if (
      isAction &&
      this.myMovieExists() &&
      movies.filter((movie) => movie.filmmakerId === 102).length !==
        this.myMovieCount()
    ) {
      movies = movies.filter((movie) => movie.filmmakerId !== 102);
      movies = movies.concat(
        this.movieService.getMoviesByFilmmakerId(102)
      );
    } else if (!isAction && this.myMovieExists()) {
      movies = movies.filter((movie) => movie.filmmakerId !== 102);
    }
    return movies;
  }

  myMovieExists(): boolean {
    return this.movieService
      .getMovieDatabase()
      .some((movie) => movie.filmmakerId === 102);
  }

  myMovieCount(): number {
    return this.movieService
      .getMovieDatabase()
      .filter((movie) => movie.filmmakerId === 102).length;
  }

  resetState() {
    this.sharedService.resetState();
    this.sections = [...this.originalSections];
  }

  showAllMovies() {
    // Reset the shared service state
    this.sharedService.resetState();

    // Retrieve all movies from the service and update the shared state
    const allMovies = this.movieService.getMovieDatabase();
    this.sharedService.updateMovies(allMovies);
  }
}

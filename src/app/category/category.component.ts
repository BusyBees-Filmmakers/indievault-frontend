import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgForOf, NgIf } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { Movie } from '../common/interface/movie';
import { SharedService } from '../service/shared/shared.service';
import { MovieService } from '../service/movie/movie.service';
import { ActivatedRoute } from '@angular/router';
import {ButtonModule} from "primeng/button";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CarouselModule,
    DialogModule,
    MovieInfoComponent,
    NavbarComponent,
    NgForOf,
    NgIf,
    SharedModule,
    ButtonModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  section: { category: string; movies: Movie[], query: string } | null = null;
  originalSections: { category: string; movies: Movie[], query: string }[] = [];
  displayMovieDialog: boolean = false;
  selectedMovie: any = null;
  noResults: boolean = false;

  constructor(
    private sharedService: SharedService,
    private movieService: MovieService,
    private activateRoute: ActivatedRoute,
    private titleService: Title
  ) {
  }

  ngOnInit() {
    this.initializeSections();
    this.section = this.findSection(this.activateRoute.snapshot.paramMap.get('cat'));

    this.sharedService.movies$.subscribe((filteredMovies: Movie[]) => {
      this.updateSection(filteredMovies);
    });

    this.activateRoute.paramMap.subscribe(() => {
      this.section = this.findSection(this.activateRoute.snapshot.paramMap.get('cat'));
      this.titleService.setTitle(this.section ? this.section.category : 'Movies');
    });

    this.sharedService.noResults$.subscribe((noResults: boolean) => {
      this.noResults = noResults;
    });

    this.resetState();
  }

  initializeSections() {
    this.originalSections = [
      { query: 'selected-for-you', category: 'Selected for You', movies: this.getAllMoviesRandomOrder(false).slice(0, 5) },
      { query: 'action', category: 'Action', movies: this.getAllMoviesRandomOrder(true) },
      { query: 'comedy', category: 'Comedy', movies: this.getAllMoviesRandomOrder(false).slice(0, 4) },
      { query: 'drama', category: 'Drama', movies: this.getAllMoviesRandomOrder(false).slice(0, 5) },
      { query: 'horror', category: 'Horror', movies: this.getAllMoviesRandomOrder(false).slice(0, 4) },
      { query: 'romance', category: 'Romance', movies: this.getAllMoviesRandomOrder(false).slice(0, 4) },
      { query: 'scifi', category: 'Scifi', movies: this.getAllMoviesRandomOrder(false).slice(0, 5) },
    ];
  }

  findSection(query: string | null) {
    return this.originalSections.find(value => value.query === query) || null;
  }

  updateSection(filteredMovies: Movie[]) {
    if (filteredMovies.length > 0) {
      this.noResults = false;
      this.section = { query: 'search-results', category: 'Search Results', movies: filteredMovies };
    } else if (this.noResults) {
      this.section = null;
    } else {
      this.noResults = false;
      this.section = this.findSection(this.activateRoute.snapshot.paramMap.get('cat'));
    }
  }

  resetState() {
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
    let movies = this.movieService.getMovieDatabase().sort(() => Math.random() - 0.5);
    if (isAction && this.myMovieExists() && movies.filter(movie => movie.filmmakerId === 102).length !== this.myMovieCount()) {
      movies = movies.filter(movie => movie.filmmakerId !== 102).concat(this.movieService.getMoviesByFilmmakerId(102));
    } else if (!isAction && this.myMovieExists()) {
      movies = movies.filter(movie => movie.filmmakerId !== 102);
    }
    return movies;
  }

  myMovieExists(): boolean {
    return this.movieService.getMovieDatabase().some(movie => movie.filmmakerId === 102);
  }

  myMovieCount(): number {
    return this.movieService.getMovieDatabase().filter(movie => movie.filmmakerId === 102).length;
  }

  returnState() {
    this.sharedService.resetState();
    this.section = this.findSection(this.activateRoute.snapshot.paramMap.get('cat'));
  }
}

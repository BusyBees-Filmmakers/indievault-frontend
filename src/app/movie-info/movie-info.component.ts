import {Component, Input, OnInit} from '@angular/core';
import { ImportsModule } from '../imports';
import { DynamicIframeComponent } from '../common/dynamic-iframe/dynamic-iframe.component';
import { RatingModule } from 'primeng/rating';
import { Movie } from '../common/interface/movie';
import { Review } from '../common/interface/review';
import { ReviewService } from '../service/review/review.service';
import {AuthService} from "../service/authentication/auth.service";

@Component({
  selector: 'app-movie-info',
  standalone: true,
  imports: [ImportsModule, RatingModule, DynamicIframeComponent],
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css'],
})
export class MovieInfoComponent{
  @Input() movie: Movie | null = null;


  // Object to hold the new review data
  newReview: Review = {
    id: 0, // Will be dynamically assigned
    movieId: 0,
    author: 'John Doe',
    rating: 0,
    comment: '',
  };

  constructor(private reviewService: ReviewService, private authService: AuthService) {}

  // Fetch reviews for the current movie
  getReviews() {
    return this.movie ? this.reviewService.getReviewsByMovieId(this.movie.id) : [];
  }

  // Submit the new review to the ReviewService
  submitReview() {
    if (!this.movie) return;

    // Assign the movie ID and generate a unique ID for the new review
    this.newReview.movieId = this.movie.id;
    const maxId = Math.max(...this.reviewService.getReviews().map((r) => r.id), 0);
    this.newReview.id = maxId + 1;
    this.newReview.author = this.authService.getCurrentFireUser()?.displayName ?? 'John Doe';

    // Add the review to the service
    this.reviewService.addReview({ ...this.newReview });

    // Reset the new review form
    this.newReview = {
      id: 0,
      movieId: 0,
      author: 'John Doe',
      rating: 0,
      comment: '',
    };
  }

}

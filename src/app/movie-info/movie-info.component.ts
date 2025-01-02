import {Component, Input, OnInit} from '@angular/core';
import { ImportsModule } from '../imports';
import { DynamicIframeComponent } from "../common/dynamic-iframe/dynamic-iframe.component";
import { RatingModule } from "primeng/rating";
import {Movie} from "../common/interface/movie";
import {Review} from "../common/interface/review";
import {ReviewService} from "../service/review/review.service";

@Component({
  selector: 'app-movie-info',
  standalone: true,
  imports: [ImportsModule, DynamicIframeComponent, RatingModule],
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent {
  @Input() movie: Movie | null = null;

  constructor(private reviewService: ReviewService) {
  }

  getReviews() {
    return this.reviewService.getReviewsByMovieId(this.movie!.id);
  }
}


import { Injectable } from '@angular/core';
import {Review} from "../../common/interface/review";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  reviews: Review[] = [
    { rating: 5, comment: "A hauntingly beautiful experience.", movieId: 1, id: 1, author: "John Smith" },
    { rating: 3, comment: "A slow burn but worth it.", movieId: 1, id: 2, author: "Jane Doe" },
    { rating: 4, comment: "Great cinematography but the story felt lacking.", movieId: 1, id: 3, author: "Michael Grant" },
    { rating: 5, comment: "Incredibly moving with stellar music.", movieId: 2, id: 4, author: "Amy Tan" },
    { rating: 4, comment: "A heartfelt ode to the everyday artist.", movieId: 2, id: 5, author: "Tom Hill" },
    { rating: 3, comment: "Felt repetitive in parts, but the music was captivating.", movieId: 2, id: 6, author: "Laura Kim" },
    { rating: 5, comment: "Atmospheric and deeply engaging.", movieId: 3, id: 7, author: "Luis Garcia" },
    { rating: 3, comment: "Beautiful visuals but a bit slow.", movieId: 3, id: 8, author: "Rachel Adams" },
    { rating: 2, comment: "I couldn't connect with the story despite the visuals.", movieId: 3, id: 9, author: "Ethan Miles" },
    { rating: 5, comment: "A unique take on fate and choice.", movieId: 4, id: 10, author: "David Wright" },
    { rating: 4, comment: "Inventive and visually stunning.", movieId: 4, id: 11, author: "Kelly Harper" },
    { rating: 3, comment: "Interesting concept but needed more depth.", movieId: 4, id: 12, author: "Sophia Reed" },
    { rating: 4, comment: "Chilling and atmospheric.", movieId: 5, id: 13, author: "Tom Warner" },
    { rating: 2, comment: "Predictable plot but nice sound design.", movieId: 5, id: 14, author: "Anna Bates" },
    { rating: 3, comment: "Leaves you with goosebumps but needed better pacing.", movieId: 5, id: 15, author: "Daniel Clark" },
    { rating: 5, comment: "Heartbreaking yet uplifting.", movieId: 6, id: 16, author: "Sophia Bell" },
    { rating: 4, comment: "A must-watch for its emotional depth.", movieId: 6, id: 17, author: "Henry Young" },
    { rating: 3, comment: "Beautiful story but pacing was inconsistent.", movieId: 6, id: 18, author: "Jack Carter" },
    { rating: 4, comment: "Poetic and visually captivating.", movieId: 7, id: 19, author: "Liam Gray" },
    { rating: 5, comment: "A beautiful meditation on time.", movieId: 7, id: 20, author: "Mia Turner" },
    { rating: 2, comment: "The concept was intriguing, but the execution fell flat.", movieId: 7, id: 21, author: "Oliver Hunt" }
  ];
  constructor() { }

  getReviews(): Review[] {
    return this.reviews;
  }

  getReviewById(id: number): Review | undefined {
    return this.reviews.find(review => review.id === id);
  }

  getReviewsByMovieId(movieId: number): Review[] {
    return this.reviews.filter(review => review.movieId === movieId);
  }

  addReview(review: Review): void {
    this.reviews.push(review);
  }

}

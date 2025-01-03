import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ImportsModule} from '../imports';
import {FileUploadModule} from 'primeng/fileupload';
import {MessageModule} from 'primeng/message';
import {MovieService} from '../service/movie/movie.service';
import {Movie} from '../common/interface/movie';
import {ReviewService} from "../service/review/review.service";
import {Review} from "../common/interface/review";

@Component({
  selector: 'app-upload-popup',
  standalone: true,
  imports: [ImportsModule, FileUploadModule, MessageModule],
  templateUrl: './upload-popup.component.html',
  styleUrl: './upload-popup.component.css'
})
export class UploadPopupComponent implements OnInit {
  uploadForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private reviewService: ReviewService
  ) {
  }

  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      name: [{value: 'My Movie', disabled: true}, Validators.required],
      category: [{value: 'Action', disabled: true}, Validators.required]
    });
  }

  onSubmit(): void {
    const newMovie: Movie = {
      title: 'My Movie',
      id: this.movieService.movieDatabase.length + 1,
      info: 'A new action movie.',
      description: 'An exciting new action movie.',
      longDescription: 'This is a long description of an exciting new action movie.',
      youtubeId: 'CXhnPLMIET0',
      filmmakerId: 102,
      credits: [{role: 'Director', name: 'Alice Green'}, {role: 'Writer', name: 'Ben Harper'}, {
        role: 'Lead Actor',
        name: 'Clara Mendel'
      }],
      genre: 'action',
      posterUrl: 'https://picsum.photos/150?random=' + this.movieService.movieDatabase.length + 1
    };

    const movieReviews: Review[] = [
      {rating: 4, comment: "The concept is intriguing.", movieId: this.movieService.movieDatabase.length + 1, id: 21, author: "Oliver Hunt"},
      {rating: 5, comment: "A hauntingly beautiful experience.", movieId: this.movieService.movieDatabase.length + 1, id: 1, author: "John Smith"},
      {rating: 4, comment: "A slow burn but worth it.", movieId: this.movieService.movieDatabase.length + 1, id: 2, author: "Jane Doe"},
      {
        rating: 4,
        comment: "Great cinematography but the story felt lacking.",
        movieId: this.movieService.movieDatabase.length + 1,
        id: 3,
        author: "Michael Grant"
      },
      {rating: 5, comment: "Incredibly moving with stellar music.", movieId: this.movieService.movieDatabase.length + 1, id: 4, author: "Amy Tan"},
      {rating: 4, comment: "A heartfelt ode to the everyday artist.", movieId: this.movieService.movieDatabase.length + 1, id: 5, author: "Tom Hill"}
    ]

    this.movieService.addMovie(newMovie);
    movieReviews.forEach(review => this.reviewService.addReview(review));
  }
}

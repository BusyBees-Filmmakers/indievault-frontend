import { Component } from '@angular/core';
import { ImportsModule } from '../imports';
import { UploadPopupComponent } from '../upload-popup/upload-popup.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ImportsModule, UploadPopupComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  displayUploadPopup: boolean = false;

  showUploadPopup() {
    this.displayUploadPopup = true;
  }

  sections = [
    {
      title: 'Selected for You',
      movies: [
        // 5 Movies
        {
          title: 'Movie 1',
          description: 'Movie 1 Description',
          info: 'Details about Movie 1',
          trailerUrl: '',
          longDescription: 'A longer description of the movie 1',
          credits: [
            'Director: Director of Movie 1',
            'Producer: Producer of Movie 1',
          ],
          reviews: ['Great movie!', 'Really enjoyed it.'],
        },
        {
          title: 'Movie 2',
          description: 'Movie 2 Description',
          info: 'Details about Movie 2',
          trailerUrl: '',
          longDescription: 'A longer description of the movie 2',
          credits: [
            'Director: Director of Movie 2',
            'Producer: Producer of Movie 2',
          ],
          reviews: ['Great movie!', 'Really enjoyed it.'],
        },
        {
          title: 'Movie 3',
          description: 'Movie 3 Description',
          info: 'Details about Movie 3',
          trailerUrl: '',
          longDescription: 'A longer description of the movie 3',
          credits: [
            'Director: Director of Movie 3',
            'Producer: Producer of Movie 3',
          ],
          reviews: ['Great movie!', 'Really enjoyed it.'],
        },
        {
          title: 'Movie 4',
          description: 'Movie 4 Description',
          info: 'Details about Movie 4',
          trailerUrl: '',
          longDescription: 'A longer description of the movie 4',
          credits: [
            'Director: Director of Movie 4',
            'Producer: Producer of Movie 4',
          ],
          reviews: ['Great movie!', 'Really enjoyed it.'],
        },
        {
          title: 'Movie 5',
          description: 'Movie 5 Description',
          info: 'Details about Movie 5',
          trailerUrl: '',
          longDescription: 'A longer description of the movie 5',
          credits: [
            'Director: Director of Movie 5',
            'Producer: Producer of Movie 5',
          ],
          reviews: ['Great movie!', 'Really enjoyed it.'],
        },
      ],
    },
    {
      title: 'Horror',
      movies: [
        // 5 horror movies
        {
          title: 'Horror Movie 1',
          description: 'Horror Movie 1 Description',
          info: 'Details about Horror Movie 1',
          trailerUrl: '',
          longDescription: 'A longer description of the horror movie 1',
          credits: [
            'Director: Director of Horror Movie 1',
            'Producer: Producer of Horror Movie 1',
          ],
          reviews: ['Great movie!', 'Really enjoyed it.'],
        },
        {
          title: 'Horror Movie 2',
          description: 'Horror Movie 2 Description',
          info: 'Details about Horror Movie 2',
          trailerUrl: '',
          longDescription: 'A longer description of the horror movie 2',
          credits: [
            'Director: Director of Horror Movie 2',
            'Producer: Producer of Horror Movie 2',
          ],
          reviews: ['Great movie!', 'Really enjoyed it.'],
        },
        {
          title: 'Horror Movie 3',
          description: 'Horror Movie 3 Description',
          info: 'Details about Horror Movie 3',
          trailerUrl: '',
          longDescription: 'A longer description of the horror movie 3',
          credits: [
            'Director: Director of Horror Movie 3',
            'Producer: Producer of Horror Movie 3',
          ],
          reviews: ['Great movie!', 'Really enjoyed it.'],
        },
        {
          title: 'Horror Movie 4',
          description: 'Horror Movie 4 Description',
          info: 'Details about Horror Movie 4',
          trailerUrl: '',
          longDescription: 'A longer description of the horror movie 4',
          credits: [
            'Director: Director of Horror Movie 4',
            'Producer: Producer of Horror Movie 4',
          ],
          reviews: ['Great movie!', 'Really enjoyed it.'],
        },
        {
          title: 'Horror Movie 5',
          description: 'Horror Movie 5 Description',
          info: 'Details about Horror Movie 5',
          trailerUrl: '',
          longDescription: 'A longer description of the horror movie 5',
          credits: [
            'Director: Director of Horror Movie 5',
            'Producer: Producer of Horror Movie 5',
          ],
          reviews: ['Great movie!', 'Really enjoyed it.'],
        },
      ],
    },
    // Add more sections with movies
  ];

  displayMovieDialog: boolean = false;
  selectedMovie: any = null;

  showMovieInfo(movie: any) {
    this.selectedMovie = movie;
    this.displayMovieDialog = true;
  }

  onDialogHide() {
    this.displayMovieDialog = false;
    this.selectedMovie = null;
  }
}

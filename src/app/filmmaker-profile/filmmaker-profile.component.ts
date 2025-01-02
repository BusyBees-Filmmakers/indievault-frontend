import { Component } from '@angular/core';
import { ImportsModule } from '../imports';
import { UploadPopupComponent } from '../upload-popup/upload-popup.component';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ImportsModule, UploadPopupComponent, MovieInfoComponent, NavbarComponent],
  templateUrl: './filmmaker-profile.component.html',
  styleUrl: './filmmaker-profile.component.css',
})
export class FilmmakerProfileComponent {
  displayUploadPopup: boolean = false;

  showUploadPopup() {
    this.displayUploadPopup = true;
  }

  sections = [
    {
      title: 'Selected for You',
      movies: [
        {
          title: 'Beneath the Willow',
          description: 'A heartfelt story of a young girl finding solace under a mystical tree.',
          info: 'Details about Beneath the Willow',
          trailerUrl: '',
          longDescription: 'A young girl discovers a magical tree that grants her courage and wisdom in difficult times.',
          credits: [
            'Director: Sarah Peterson',
            'Producer: Michael Tanaka',
          ],
          reviews: ['Beautifully emotional.', 'A touching short story.'],
        },
        {
          title: 'The Paper Boat',
          description: 'A journey of a boy and his paper boat on an unexpected adventure.',
          info: 'Details about The Paper Boat',
          trailerUrl: '',
          longDescription: 'When a boy sends his paper boat into a stream, he never expects it to take him to new worlds.',
          credits: [
            'Director: Adam Sanchez',
            'Producer: Rachel Li',
          ],
          reviews: ['A creative, imaginative tale.', 'Delightfully whimsical.'],
        },
        {
          title: 'Echoes of Tomorrow',
          description: 'A mysterious recording unveils a glimpse of the future.',
          info: 'Details about Echoes of Tomorrow',
          trailerUrl: '',
          longDescription: 'After discovering an old cassette tape, a teenager hears strange messages predicting future events.',
          credits: [
            'Director: Nina Kapoor',
            'Producer: Lucas Yang',
          ],
          reviews: ['Thought-provoking and eerie.', 'A creative twist on time travel.'],
        },
        {
          title: 'Kindred Spirits',
          description: 'Two strangers form a bond through an unlikely series of coincidences.',
          info: 'Details about Kindred Spirits',
          trailerUrl: '',
          longDescription: 'A lost item connects two individuals who learn they have more in common than they thought.',
          credits: [
            'Director: James O’Connor',
            'Producer: Emily Davis',
          ],
          reviews: ['Uplifting and feel-good.', 'Charming and well-paced.'],
        },
        {
          title: 'Canvas of Dreams',
          description: 'An artist’s painting comes to life, revealing a hidden world.',
          info: 'Details about Canvas of Dreams',
          trailerUrl: '',
          longDescription: 'A struggling artist discovers that her latest creation holds a magical secret.',
          credits: [
            'Director: Clara Johnson',
            'Producer: Oliver Kim',
          ],
          reviews: ['Visually stunning.', 'A magical and inspiring story.'],
        },
      ],
    },
    {
      title: 'Horror',
      movies: [
        {
          title: 'Whispering Shadows',
          description: 'A haunted cabin hides secrets best left undisturbed.',
          info: 'Details about Whispering Shadows',
          trailerUrl: '',
          longDescription: 'A group of friends uncover the dark history of a remote cabin during their weekend getaway.',
          credits: [
            'Director: Jordan Lee',
            'Producer: Mia Carter',
          ],
          reviews: ['Chilling and suspenseful.', 'Cleverly executed horror.'],
        },
        {
          title: 'The Clock Strikes Twelve',
          description: 'A cursed clock brings nightmares to life.',
          info: 'Details about The Clock Strikes Twelve',
          trailerUrl: '',
          longDescription: 'When the hands of an old grandfather clock strike midnight, strange events begin to unfold.',
          credits: [
            'Director: Alex Romero',
            'Producer: Sophia Harris',
          ],
          reviews: ['Intriguing and eerie.', 'Kept me on the edge of my seat.'],
        },
        {
          title: 'Room 313',
          description: 'Some doors should never be opened.',
          info: 'Details about Room 313',
          trailerUrl: '',
          longDescription: 'A hotel guest learns why Room 313 has remained locked for decades.',
          credits: [
            'Director: Liam Torres',
            'Producer: Zoe Martin',
          ],
          reviews: ['Spine-tingling and intense.', 'A classic ghost story with a twist.'],
        },
        {
          title: 'The Forgotten Toy',
          description: 'An old toy holds a malevolent presence.',
          info: 'Details about The Forgotten Toy',
          trailerUrl: '',
          longDescription: 'When a child brings home a dusty, antique doll, strange occurrences begin to unravel.',
          credits: [
            'Director: Hannah Patel',
            'Producer: Nathan Wright',
          ],
          reviews: ['Creepy and unforgettable.', 'Perfect blend of nostalgia and fear.'],
        },
        {
          title: 'The Mirror’s Reflection',
          description: 'A mirror that shows more than it should.',
          info: 'Details about The Mirror’s Reflection',
          trailerUrl: '',
          longDescription: 'After finding a vintage mirror, a young woman sees reflections of a dark, parallel reality.',
          credits: [
            'Director: Ethan Bell',
            'Producer: Grace Evans',
          ],
          reviews: ['Hauntingly creative.', 'A psychological thrill.'],
        },
      ],
    },
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

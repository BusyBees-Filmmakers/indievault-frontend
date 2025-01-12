import {Component, ViewChild} from '@angular/core';
import {Menu} from 'primeng/menu';
import {Router} from '@angular/router';
import {Auth, onAuthStateChanged, signOut, User} from '@angular/fire/auth';
import {MovieService} from '../service/movie/movie.service';
import {SharedService} from '../service/shared/shared.service';
import {FormsModule} from '@angular/forms';
import {ImportsModule} from '../imports';
import {MenuItem} from 'primeng/api';
import {AvatarModule} from "primeng/avatar";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, ImportsModule, AvatarModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @ViewChild('profileMenu') profileMenu!: Menu;

  items: MenuItem[] = [];
  profileItems: MenuItem[] = [];

  profileImageUrl: string | null = null;
  isLoggedIn: boolean = false;
  isFilmmaker: boolean = false;

  searchQuery: string = '';

  constructor(
    private auth: Auth,
    private router: Router,
    private movieService: MovieService,
    private sharedService: SharedService
  ) {
    // Check user authentication and update profile
    onAuthStateChanged(this.auth, (user: User | null) => {
      this.isLoggedIn = !!user;
      this.profileImageUrl = user?.photoURL ?? null;

      if (user) {
        const plan = localStorage.getItem(`subscription_plan_${user.uid}`);
        this.isFilmmaker = plan === 'Filmmaker';

        // Update shared service with user profile data
        this.sharedService.updateUserProfile({
          userName: user.displayName,
          userProfilePic: user.photoURL,
          isFilmmaker: this.isFilmmaker,
        });
      }

      this.updateMenuItems();
    });
  }

  logout() {
    signOut(this.auth)
      .then(() => {
        this.router.navigate(['/']);
        localStorage.clear();
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
  }

  updateMenuItems() {
    this.items = [
      ...(this.isLoggedIn
        ? [
          {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/home'],
          },
          {
            label: 'Product features',
            icon: 'pi pi-fw pi-star',
            routerLink: ['/product-features'],
          },
          {
            label: 'Categories',
            icon: 'pi pi-fw pi-list',
            items: [
              {label: 'Selected for You', routerLink: ['/category/selected-for-you']},
              {label: 'Action', routerLink: ['/category/action']},
              {label: 'Comedy', routerLink: ['/category/comedy']},
              {label: 'Drama', routerLink: ['/category/drama']},
              {label: 'Horror', routerLink: ['/category/horror']},
              {label: 'Romance', routerLink: ['/category/romance']},
              {label: 'Scifi', routerLink: ['/category/scifi']},
            ],
          },
        ]
        : [{
          label: 'Welcome to IndieVault!',
          icon: 'pi pi-fw pi-info-circle',
          routerLink: ['/'],
        },
          {
            label: 'Product Features',
            icon: 'pi pi-fw pi-star',
            routerLink: ['/product-features'],
          },
        ]),
    ];

    this.profileItems = [
      ...(this.isFilmmaker
        ? [
          {
            label: 'Profile',
            icon: 'pi pi-fw pi-user',
            routerLink: ['/profile'],
          },
        ]
        : []),
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.logout(),
      },
    ];
  }

  async onSearch() {
    // Reset noResults flag initially
    this.sharedService.updateNoResults(false);

    // Add a 500ms delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const query = this.searchQuery.toLowerCase().trim();

    if (!query) {
      // If the query is empty, reset to show all movies
      this.showAllMovies();
      return;
    }

    // Retrieve all movies and filter based on query
    const allMovies = this.movieService.getMovieDatabase();
    const filteredMovies = allMovies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(query) ||
        movie.description.toLowerCase().includes(query) ||
        (movie.genre && movie.genre.toLowerCase().includes(query))
    );

    if (filteredMovies.length === 0) {
      // If no matches, update noResults flag
      this.sharedService.updateNoResults(true);
    } else {
      // Otherwise, update the shared service with filtered movies
      this.sharedService.updateMovies(filteredMovies);
    }
  }

  showAllMovies() {
    // Reset the shared service state
    this.sharedService.resetState();

    // Retrieve all movies from the service and update the shared state
    const allMovies = this.movieService.getMovieDatabase();
    this.sharedService.updateMovies(allMovies);
  }

}

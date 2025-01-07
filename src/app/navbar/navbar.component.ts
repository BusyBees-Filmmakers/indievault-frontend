import { Component, NgModule, ViewChild } from '@angular/core';
import { Menu } from 'primeng/menu';
import { Router } from '@angular/router';
import { Auth, onAuthStateChanged, signOut, User } from '@angular/fire/auth';
import { MovieService } from '../service/movie/movie.service';
import { SharedService } from '../service/shared.service';
import { FormsModule } from '@angular/forms';
import { ImportsModule } from '../imports';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, ImportsModule],
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

  searchQuery: string = ''; // Search query for filtering

  constructor(
    private auth: Auth,
    private router: Router,
    private movieService: MovieService,
    private sharedService: SharedService // Inject shared service
  ) {
    // Check user authentication and update profile
    onAuthStateChanged(this.auth, (user: User | null) => {
      this.isLoggedIn = !!user;
      this.profileImageUrl = user?.photoURL || null;

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
            { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'], command: () => this.showAllMovies() },
            {
              label: 'Product features',
              icon: 'pi pi-fw pi-star',
              routerLink: ['/product-features'],
            },
          ]
        : [
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

  onSearch() {
    const query = this.searchQuery.toLowerCase();
    const allMovies = this.movieService.getMovieDatabase();
    const filteredMovies = allMovies.filter(
      (movie) => movie.title.toLowerCase().includes(query)
    );

    // Update shared service with filtered movies
    this.sharedService.updateMovies(filteredMovies);
  }

  showAllMovies() {
    // Reset to show all movies
    const allMovies = this.movieService.getMovieDatabase();
    this.sharedService.updateMovies([]);
  }
}

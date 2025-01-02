import { Component, NgModule, ViewChild } from '@angular/core';

import { Menu } from 'primeng/menu';

import { Router } from '@angular/router';
import { ImportsModule } from '../imports';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';

import { Auth, onAuthStateChanged, signOut, User } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, ImportsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @ViewChild('profileMenu') profileMenu!: Menu;

  items: MenuItem[]= [];
  profileItems: MenuItem[]= [];

  profileImageUrl: string | null = null;
  isLoggedIn: boolean = false;
  isFilmmaker: boolean = false;

  constructor(private auth: Auth, private router: Router) {
    onAuthStateChanged(this.auth, (user: User | null) => {
      this.isLoggedIn = !!user;
      this.profileImageUrl = user?.photoURL || null;

      if (user) {
        const plan = localStorage.getItem(`subscription_plan_${user.uid}`);
        this.isFilmmaker = plan === 'Filmmaker'; // Check if the user is a filmmaker
      }

      this.updateMenuItems();
    });
  }

  logout() {
    // Implement logout functionality
    signOut(this.auth)
      .then(() => {
        this.router.navigate(['/']); // Redirect to login page
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
  }

  updateMenuItems() {
    // Update the main menu items
    this.items = [
      ...(this.isLoggedIn
        ? [{ label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'] }]
        : []),
    ];

    // Update the profile menu items
    this.profileItems = [
      ...(this.isFilmmaker
        ? [
            {
              label: 'Profile',
              icon: 'pi pi-fw pi-user',
              routerLink: ['/profile'],
            },
            {
              label: 'Settings',
              icon: 'pi pi-fw pi-cog',
              routerLink: ['/settings'],
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

  toggleSearch(event: any, op: OverlayPanel) {
    op.toggle(event);
  }
}

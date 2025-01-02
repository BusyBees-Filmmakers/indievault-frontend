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
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  @ViewChild('profileMenu') profileMenu!: Menu;

  items: MenuItem[];
  profileItems: MenuItem[];

  profileImageUrl: string | null = null; 
  isLoggedIn: boolean = false; 

  constructor(private auth: Auth, private router: Router) {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'] },
      // { label: 'About', icon: 'pi pi-fw pi-info-circle', routerLink: ['/about'] },
      // { label: 'Contact Us', icon: 'pi pi-fw pi-envelope', routerLink: ['/contact'] },
      // other menu items
    ];

    this.profileItems = [
      { label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: ['/profile'] },
      { label: 'Settings', icon: 'pi pi-fw pi-cog', routerLink: ['/settings'] },
      { label: 'Logout', icon: 'pi pi-fw pi-power-off', command: () => this.logout() }
    ];

    // Listen for auth state changes
    onAuthStateChanged(this.auth, (user: User | null) => {
      this.isLoggedIn = !!user; // True if user is logged in
      this.profileImageUrl = user?.photoURL || null; // Set Google profile image if available
      this.updateMenuItems();
    });
  }

  logout() {
    // Implement logout functionality
    signOut(this.auth)
    .then(() => {
      this.router.navigate(['/']); // Redirect to login page
    })
    .catch(error => {
      console.error('Error during logout:', error);
    });
  }

  updateMenuItems() {
    // Dynamically set menu items based on login status
    this.items = [
      ...(this.isLoggedIn
        ? [{ label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'] }]
        : []),
    ];
  }

  toggleSearch(event: any, op: OverlayPanel) {
    op.toggle(event);
  }

}


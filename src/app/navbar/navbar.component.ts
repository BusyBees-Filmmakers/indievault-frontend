// src/app/navbar/navbar.component.ts
import {Component, ViewChild} from '@angular/core';
import {Menu} from 'primeng/menu';
import {Router} from '@angular/router';
import {ImportsModule} from '../imports';
import {FormsModule} from '@angular/forms';
import {MenuItem} from 'primeng/api';
import {Auth, onAuthStateChanged, signOut, User} from '@angular/fire/auth';

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
      { label: 'Product Features', icon: 'pi pi-fw pi-star', routerLink: ['/product-features'] }
      // other menu items
    ];

    this.profileItems = [
      { label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: ['/profile'] },
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
      localStorage.clear(); // Clear local storage
    })
    .catch(error => {
      console.error('Error during logout:', error);
    });
  }

  updateMenuItems() {
    // Dynamically set menu items based on login status
    this.items = [
      ...(this.isLoggedIn
        ? [
            { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'] },
            { label: 'Product features', icon: 'pi pi-fw pi-star', routerLink: ['/product-features'] }
          ]
        : [{ label: 'Product Features', icon: 'pi pi-fw pi-star', routerLink: ['/product-features'] }]),
    ];
  }
}

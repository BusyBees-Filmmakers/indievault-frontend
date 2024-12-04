import { Component, NgModule } from '@angular/core';



import { Router } from '@angular/router';
import { ImportsModule } from '../imports';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, ImportsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  items: MenuItem[];
  profileItems: MenuItem[];

  constructor() {
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
  }

  logout() {
    // Implement logout functionality
  }

  toggleSearch(event: any, op: OverlayPanel) {
    op.toggle(event);
  }

}


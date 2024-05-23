import { Component, NgModule } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';

import { Router } from '@angular/router';
// import { ImportsModule } from '../imports';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ButtonModule, MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  items: MenuItem[];
  profileItems: MenuItem[];

  constructor() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
      { label: 'Movies', icon: 'pi pi-fw pi-video', routerLink: ['/movies'] },
      { label: 'Genres', icon: 'pi pi-fw pi-tags', routerLink: ['/genres'] },
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


import { Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SubscribeComponent } from "./subscribe/subscribe.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FilmmakerProfileComponent } from './filmmaker-profile/filmmaker-profile.component';

export const routes: Routes = [
  { path: '', title: 'Login', component: LoginComponent },
  { path: 'subscribe', title: 'Subscribe', component: SubscribeComponent },
  { path: 'home', title: 'Home', component: HomepageComponent },
  { path: 'profile', title: 'Profile', component: ProfileComponent },
  { path: 'about', title: 'About Us', component: AboutComponent },
  { path: 'contact', title: 'Contact Us', component: ContactUsComponent },
  { path: 'filmmaker', title: 'Filmmaker Profile', component: FilmmakerProfileComponent },
  // {path: '', redirectTo: '/login', pathMatch: 'full' },
];

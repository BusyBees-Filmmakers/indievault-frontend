import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SubscribeComponent} from "./subscribe/subscribe.component";
import {HomepageComponent} from "./homepage/homepage.component";
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  {path: 'login', title:'Login', component: LoginComponent},
  {path: 'subscribe', title:'Subscribe', component: SubscribeComponent},
  {path: 'home', title:'Home', component: HomepageComponent},
  {path: 'profile', title:'Profile', component: ProfileComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full' },
];

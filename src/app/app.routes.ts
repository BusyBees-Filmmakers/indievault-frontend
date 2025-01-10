import { Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SubscribeComponent } from "./subscribe/subscribe.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FilmmakerProfileComponent } from './filmmaker-profile/filmmaker-profile.component';
import { MovieViewComponent } from "./movie-view/movie-view.component";
import { authGuard } from './auth.guard';
import { ProductShowcasePageComponent } from './product-showcase-page/product-showcase-page.component';
import {CategoryComponent} from "./category/category.component";

export const routes: Routes = [
  { path: '', title: 'Login', component: LoginComponent },
  { path: 'subscribe', title: 'Subscribe', component: SubscribeComponent },
  { path: 'home', title: 'Home', component: HomepageComponent, canActivate: [authGuard] },
  { path: 'profile', title: 'Profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'filmmaker', component: FilmmakerProfileComponent, canActivate: [authGuard] },
  { path: 'movie/:id', title: 'Movie View', component: MovieViewComponent, canActivate: [authGuard] },
  { path: 'category/:cat', component: CategoryComponent, canActivate: [authGuard] },
  { path: 'product-features', title: 'Product Features', component: ProductShowcasePageComponent }
];

import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SubscribeComponent} from "./subscribe/subscribe.component";
import {HomepageComponent} from "./homepage/homepage.component";

export const routes: Routes = [
  {path: 'login', title:'Login', component: LoginComponent},
  {path: 'subscribe', title:'Subscribe', component: SubscribeComponent},
  {path: 'home', title:'Home', component: HomepageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
];

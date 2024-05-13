import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SubscribeComponent} from "./subscribe/subscribe.component";

export const routes: Routes = [
  {path: 'login', title:'Login', component: LoginComponent},
  {path: 'subscribe', title:'Subscribe', component: SubscribeComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
];

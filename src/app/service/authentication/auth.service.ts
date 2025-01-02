import {inject, Injectable} from '@angular/core';
import {Auth} from "@angular/fire/auth";
import firebase from "firebase/compat";
import UserInfo = firebase.UserInfo;


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth = inject(Auth);

  getCurrentFireUser() {
    return this.auth.currentUser;
  }
}

import {Component, inject} from '@angular/core';

import { CommonModule } from '@angular/common';
import { ImportsModule } from '../imports';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import {UserService} from "../service/user/user.service";
import {AvatarModule} from "primeng/avatar";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ImportsModule, MovieInfoComponent, NavbarComponent, AvatarModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  auth = inject(Auth);
  router = inject(Router);

  constructor(private userService: UserService) {
    // this.auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     const fetchedUser = this.userService.getUserByUid(user.uid);
    //     if (fetchedUser) {
    //        this.router.navigate(['/home']).then(r => console.log('welcome back user'));
    //     } else {
    //        this.router.navigate(['/']).then(r => console.log('welcome new user'));
    //     }
    //   }
    // });
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, provider).then(
      (result) => {
        if (result.user) {
          console.log('User logged in successfully');
        } else {
          console.log('User not logged in');
        }
      }
    )
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    NgOptimizedImage,
    CommonModule,
    NgOptimizedImage,
    AboutComponent,
    ContactUsComponent,
    NavbarComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  auth = inject(Auth);
  router = inject(Router);

  constructor() {}

  ngOnInit(): void {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        const subscriptionStatus = localStorage.getItem(`subscription_${user.uid}`);
        if (subscriptionStatus === 'subscribed') {
          this.router.navigate(['home']); // Redirect to home
        } else {
          this.router.navigate(['subscribe']); // Redirect to subscribe
        }
      }
    });
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(this.auth, provider).then(async (result) => {
      if (result.user) {
        const user = result.user;
  
        // Check if subscription status is already in localStorage
        const subscriptionStatus = localStorage.getItem(`subscription_${user.uid}`);
  
        if (!subscriptionStatus) {
          // If no subscription status, default to unsubscribed
          localStorage.setItem(`subscription_${user.uid}`, 'unsubscribed');
          this.router.navigate(['subscribe']); // Redirect to subscription page
        } else if (subscriptionStatus === 'subscribed') {
          this.router.navigate(['home']); // Redirect to home if already subscribed
        } else {
          this.router.navigate(['subscribe']); // Redirect to subscription page
        }
      }
    }).catch((error) => {
      console.error('Error during login:', error);
    });
  }

  async checkSubscriptionStatus(userId: string): Promise<void> {
    localStorage.setItem(`subscription_${userId}`, 'subscribed');
    this.router.navigate(['home']); // Redirect to home after subscription
  }

  login() {
    //TODO: CHECK IF USER EXISTS IN DB
    //TODO: IF USER EXISTS, REDIRECT TO HOME PAGE
    //TODO: IF USER DOES NOT EXIST, REDIRECT TO SUBSCRIBE PAGE
    //TODO: IF USER EXISTS BUT IS NOT SUBSCRIBED, REDIRECT TO SUBSCRIBE PAGE
    //TODO: IN MOCK, REDIRECT TO SUBSCRIBE PAGE
    this.router.navigate(['subscribe']);
  }
}

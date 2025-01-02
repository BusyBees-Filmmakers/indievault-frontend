import {Component, OnInit} from '@angular/core';
import {SubscriptionPlan} from "./subscriptionPlan";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {NgForOf} from "@angular/common";
import {ToastModule} from "primeng/toast";
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    NgForOf,
    ToastModule
  ],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css'
})
export class SubscribeComponent implements OnInit{

  protected allPlans: SubscriptionPlan[] = [
    {name: 'Viewer', price: 5, points: ['Access all the movies']},
    {name: 'Filmmaker', price: 10, points: ['Everything in Viewer', 'Upload your own movies',
        'Access to analytics', 'Receive revenue']},
  ]

  constructor(private auth: Auth, private router: Router) {
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  subscribe(chosenPlan: number) {
    const user = this.auth.currentUser;

    if (user) {
      // Store subscription status in localStorage
      localStorage.setItem(`subscription_${user.uid}`, 'subscribed');

      // Optionally, log which plan the user selected (if needed for future use)
      localStorage.setItem(`subscription_plan_${user.uid}`, this.allPlans[chosenPlan].name);

      // Redirect to home page
      this.router.navigate(['home']);
    } else {
      console.error('No user is logged in!');
    }
  }
}

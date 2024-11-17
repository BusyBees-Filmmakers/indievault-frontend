import {Component, OnInit} from '@angular/core';
import {SubscriptionPlan} from "./subscriptionPlan";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {NgForOf} from "@angular/common";
import {ToastModule} from "primeng/toast";

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

  constructor() {
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  subscribe(chosenPlan: number) {
    //TODO: IMPLEMENT SUBSCRIPTION
    //TODO: IN MOCK, REDIRECT TO HOME PAGE
  }
}

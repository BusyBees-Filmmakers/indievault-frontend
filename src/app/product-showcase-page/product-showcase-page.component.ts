import {Component, inject} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {NavbarComponent} from "../navbar/navbar.component";
import {SubscriptionPlan} from "../subscribe/subscriptionPlan";
import {TableModule} from "primeng/table";
import {Router} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {Auth} from '@angular/fire/auth';

@Component({
  selector: 'app-product-showcase-page',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    NavbarComponent,
    TableModule,
    ButtonModule,
    NgIf
  ],
  templateUrl: './product-showcase-page.component.html',
  styleUrl: './product-showcase-page.component.css'
})
export class ProductShowcasePageComponent {

  auth = inject(Auth);

  showcase = [
    {
      title: 'Watch movies',
      description: 'Movies from your favourite independent filmmakers',
      gifUri: 'assets/features/feature1.gif' // gif off homepage
    },
    {
      title: 'Each of our films has a story to tell',
      description: 'Each movie has description, cast, and reviews. You can even leave your own review!',
      gifUri: 'assets/features/feature2.gif' //gif of movie info view
    },
    {
      title: 'If you are a filmmaker, you can showcase your work',
      description: 'Go to your profile and upload your movies!',
      gifUri: 'assets/features/feature3.gif' //gif of uploading a movie
    },
    {
      title: 'Explore our ever-growing library',
      description: 'Browse through various movie categories to find your favorite genre. We even have a section for movies selected just for you!',
      gifUri: 'assets/features/feature4.gif' // gif of category browsing
    },
    {
      title: 'Find exactly what you are looking for',
      description: 'Use our search feature to find movies quickly and easily.',
      gifUri: 'assets/features/feature5.gif' // gif of search functionality
    }
  ];

  subscriptionPlans: SubscriptionPlan[] = [
    { name: 'Viewer', price: 5, points: ['Access all the movies'] },
    { name: 'Filmmaker', price: 10, points: ['Everything in Viewer', 'Upload your own movies', 'Access to analytics', 'Receive revenue'] }
  ];

  constructor(private router: Router) {}

  changeSubscription(): void {
    localStorage.clear();
    this.router.navigate(['/subscribe']);
  }

  doesUserHaveSubscription(): boolean {
    // get user from auth
    const user = this.auth.currentUser;
    return user !== null && localStorage.getItem(`subscription_plan_${user.uid}`) !== null;
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css'
})
export class SubscribeComponent implements OnInit{

  private allPlans: {name: string, price: number, points: string[]}[] = [
    {name: 'Viewer', price: 5, points: ['Access all the movies']},
    {name: 'Filmmaker', price: 10, points: ['Everything in Viewer', 'Upload your own movies']}
  ]


  constructor() {
  }

  ngOnInit(): void {

  }

  submit(chosenPlan: number) {
    //TODO: IMPLEMENT SUBSCRIPTION
    //TODO: IN MOCK, REDIRECT TO HOME PAGE
  }
}

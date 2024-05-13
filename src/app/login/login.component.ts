import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    NgOptimizedImage
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    //TODO: Implement check for user login
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

import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    AboutComponent,
    ContactUsComponent,
    NavbarComponent
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

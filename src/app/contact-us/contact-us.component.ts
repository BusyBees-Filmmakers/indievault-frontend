import { Component } from '@angular/core';
import { ImportsModule } from '../imports';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ ImportsModule, MovieInfoComponent, NavbarComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  onSubmit() {
    alert('Thank you for contacting us! We will respond shortly.');
    // In a real-world scenario, you would send the form data to a backend API here.
  }
}

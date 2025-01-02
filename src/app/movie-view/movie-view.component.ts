import {Component, OnInit} from '@angular/core';
import {DynamicIframeComponent} from "../common/dynamic-iframe/dynamic-iframe.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css'],
  standalone: true,
  imports: [DynamicIframeComponent]
})
export class MovieViewComponent {
  //subtracts 20px for the scrollbar
  screenWidth: number = window.innerWidth - 20;
  screenHeight: number = window.innerHeight - 20;
  videoId: string = this.route.snapshot.paramMap.get('id')!;

  constructor(private route: ActivatedRoute) {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
}

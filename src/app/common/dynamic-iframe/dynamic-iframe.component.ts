import {Component, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-dynamic-iframe',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-iframe.component.html',
  styleUrl: './dynamic-iframe.component.css'
})
export class DynamicIframeComponent implements OnInit, OnChanges {
  @Input() width: number = 600; // Default width
  @Input() height: number = 300; // Default height
  @Input() videoId: string = 'dQw4w9WgXcQ'; // Default video ID

  sanitizedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.sanitizedUrl = this.getSanitizedUrl(this.videoId);
  }

  ngOnInit(): void {
    // Initialize iframe size and URL
    this.setIframeSize();
    this.sanitizedUrl = this.getSanitizedUrl(this.videoId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videoId']) {
      this.sanitizedUrl = this.getSanitizedUrl(this.videoId);
    }
    if (changes['width'] || changes['height']) {
      this.setIframeSize();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.setIframeSize();
  }

  private getSanitizedUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube-nocookie.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private setIframeSize(): void {
    // Optional: Implement dynamic sizing logic here
    // Currently, it uses the input width and height
  }
}

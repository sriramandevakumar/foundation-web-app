import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  images = [
    'assets/IndependenceDayImages/ind-1.png',
    'assets/IndependenceDayImages/ind-2.png',
    'assets/IndependenceDayImages/ind-3.png',
    'assets/IndependenceDayImages/ind-4.png'
  ];

  currentIndex = 0;

  constructor() {
    // Auto-slide every 3 seconds
    setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}

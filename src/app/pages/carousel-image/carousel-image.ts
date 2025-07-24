import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-image',
  standalone: false,
  templateUrl: './carousel-image.html',
  styleUrl: './carousel-image.css'
})
export class CarouselImage {
 images = [1, 2, 3].map((n) => `assets/image${n}.png`);
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselComponent } from '../../movements/carousel.component/carousel.component';
@Component({
  selector: 'app-independence-day-celebration',
  imports: [CarouselComponent],
  templateUrl: './independence-day-celebration.html',
  styleUrl: './independence-day-celebration.css'
})
export class IndependenceDayCelebration {
constructor(private route: ActivatedRoute) {}
 public independenceImages = [
    'assets/IndependenceDayImages/ind-1.png',
    'assets/IndependenceDayImages/ind-2.png',
    'assets/IndependenceDayImages/ind-3.png',
    'assets/IndependenceDayImages/ind-4.png'
  ];
}

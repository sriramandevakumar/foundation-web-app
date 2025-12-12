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

}

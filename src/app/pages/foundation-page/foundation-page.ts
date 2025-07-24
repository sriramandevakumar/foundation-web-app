import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-foundation-page',
  standalone: false,
  templateUrl: './foundation-page.html',
  styleUrl: './foundation-page.css'
})
export class FoundationPage {
images = [1, 2, 3].map((n) => `assets/image${n}.png`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}

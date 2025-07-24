import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-foundation-page',
  standalone: false,
  templateUrl: './foundation-page.html',
  styleUrl: './foundation-page.css'
})
export class FoundationPage {
images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}


git config --global user.email "sriramandevakumar@gmail.com"
  git config --global user.name "Sriramandevakumar"

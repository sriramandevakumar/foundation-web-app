import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-foundation-page',
  standalone: false,
  templateUrl: './foundation-page.html',
  styleUrl: './foundation-page.css'
})
export class FoundationPage {

  images = [
    {
      imageSrc:
        'assets/image1.png',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'assets/image2.png',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'assets/image3.png',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'assets/image4.png',
      imageAlt: 'person2',
    },
  ];
  
}

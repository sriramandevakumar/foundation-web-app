import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
  imports: [CommonModule]
})
export class HomePage {
    constructor(private route: ActivatedRoute) {
    console.log(route.snapshot);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
  imports: [CommonModule]
})
export class HomePage {
  constructor(private router: Router) {}
  gotoAbout() {
      this.router.navigate(['/about']);  
  }
}

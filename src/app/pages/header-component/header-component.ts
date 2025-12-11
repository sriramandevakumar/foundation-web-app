import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  standalone: true,
  templateUrl: './header-component.html',
  styleUrls: ['./header-component.css'], 
})
export class HeaderComponent {

    constructor(private router: Router) {}
  gotoAbout() {
      this.router.navigate(['/about']);  
  }

  gotoGetInvolved() {
      this.router.navigate(['/get-involved']);  
  }
}

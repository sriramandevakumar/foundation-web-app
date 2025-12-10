import { Component, signal } from '@angular/core';
import { HeaderComponent } from './pages/header-component/header-component';
import { FooterComponent } from './pages/footer-component/footer-component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    RouterOutlet,  
    NgbModule
  ]
})
export class App {
  protected readonly title = signal('foundation-web-app');
}

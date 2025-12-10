import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  imports: [CommonModule],  
  styleUrls: ['./about.css']
})
export class About {
constructor(private route: ActivatedRoute) {}
}

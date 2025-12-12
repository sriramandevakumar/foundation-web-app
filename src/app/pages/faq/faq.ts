import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaqAccordion} from '../faq-accordion/faq-accordion';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, FaqAccordion],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
constructor(private route: ActivatedRoute) {}
}

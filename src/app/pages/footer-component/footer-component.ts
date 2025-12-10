import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BankDetails } from '../bank-details/bank-details';
@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.html',
  standalone: true,
  imports: [CommonModule, BankDetails],
  styleUrls: ['./footer-component.css']
})
export class FooterComponent {

}

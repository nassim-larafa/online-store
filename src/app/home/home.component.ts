import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  welcome: string[] = [
    'Welcome to our online store'
  ];

  description: string[] = [
    'Discover ......'
  ];

  promotions: string[] = [
    '20% off on all smartphones - Use code: SUMMER20',
    'Free shipping on orders over $100',
    'Buy one get one free on selected items'
  ];
}
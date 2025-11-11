import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  welcome: string = 'Welcome to our online store !';
  description: string = 'Discover our latest collection of smartphones from top brands';
  promotions: string[] = [
    'Get a free a case with every smartphone purchase',
    'trade in your old phone and get up to 30% off',
    'Free expedited shipping on all smartphones orders'
  ];
}
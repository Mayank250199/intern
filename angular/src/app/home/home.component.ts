import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myInterval = 1500;
   activeSlideIndex = 0;
   
    slides = [
      {image: '../../../../assets/images/3.jpg'},
      {image: '../../../../assets/images/67.jpg'},
      {image: '../../../../assets/images/78.jpg'}
    ];
}

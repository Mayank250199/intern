import { Component, OnInit } from '@angular/core';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }
  myInterval = 2200;
   activeSlideIndex = 0;

    slides = [
      {image: '../../../../assets/images/3.jpg'},
      {image: '../../../../assets/images/67.jpg'},
      {image: '../../../../assets/images/78.jpg'}
    ];


}

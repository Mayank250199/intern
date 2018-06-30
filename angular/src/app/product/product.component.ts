import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:false,
          dots:false,
          responsive:{
              0:{
                  items:1
              },
              400:{
                  items:1
              },
              500:{
                  items:3
              }
          }
      })

    })
    }


  myInterval = 1500;
   activeSlideIndex = 0;

    slides = [
      {image: '../../../../assets/images/3.jpg'},
      {image: '../../../../assets/images/67.jpg'},
      {image: '../../../../assets/images/78.jpg'}
    ];




}

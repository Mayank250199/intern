import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

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
                  items:2
              },
              500:{
                  items:4
              }
          }
      })

    })
  }

  slides = [
    {image: '../../../../assets/images/3.jpg'},
    {image: '../../../../assets/images/67.jpg'},
    {image: '../../../../assets/images/78.jpg'}
  ];

}

import { Component, OnInit } from '@angular/core';
import {  PartnerService } from "../providers/partner.service";
import { Configuration } from '../app.constants';
import { HttpClient } from '@angular/common/http';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

declare var $:any;

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
Partners:any;
serveUrl:any;
  constructor(
    private http:HttpClient,
    private con:Configuration,
    public ps:PartnerService,
  ) {

  }

  ngOnInit() {


    this.clients();

  }




  clients(){
    this.ps.getClient().subscribe(res=>{
        this.Partners=res;
        if(this.Partners){
          $('.owl-carousel').owlCarousel({
              loop:true,
              margin:10,
              nav:false,
              dots:false,
              responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:3
                  },
                  1000:{
                      items:5
                  }
              }
          })
        }
      },err=>{

    })
  }




  // slides = [
  //   {image: '../../../../assets/images/3.jpg'},
  //   {image: '../../../../assets/images/67.jpg'},
  //   {image: '../../../../assets/images/78.jpg'}
  // ];

}

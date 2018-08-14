import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.constants';
import {  ProductService } from "../providers/product.service";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import * as $ from 'jquery';

declare var $:any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements AfterViewInit {
  serveUrl:any;
  products:any;
  modaldata:any;
    constructor(
    private http:HttpClient,
    private con:Configuration,
    public ps:ProductService,
  ) {
          this.serveUrl=this.con.server;
  }

  ngAfterViewInit() {

    this.owl();
    }

  slides = [
  {image: '../../../../assets/images/3.jpg'},
  {image: '../../../../assets/images/67.jpg'},
  {image: '../../../../assets/images/78.jpg'}
];

owl(){

  this.ps.getProducts().subscribe(res=>{
      this.products=res;
      if(this.products){
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
        600:{
            items:3
        },
        1000:{
            items:3
        },
        1100:{
            items:3
        },
        1200:{
            items:3
        }
    }
          })

        })
      }
  },err=>{

  })

}

modal(name:any){
name=name.split(' ')[0].toLowerCase();
console.log(name);
  this.http.get(this.serveUrl +name).subscribe(res=>{
      this.modaldata=res;
      $('#myModal').modal('show');
},err=>{

  })
}

}
 
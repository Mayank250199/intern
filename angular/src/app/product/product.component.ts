import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.constants';
import {  ProductService } from "../providers/product.service";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

declare var $:any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
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

  ngOnInit(
  ) {
    this.getProduct();

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


    getProduct(){
      this.ps.getProducts().subscribe(res=>{
          this.products=res;
          console.log(this.products)
      },err=>{

      })
}

modal(name:any){
  this.http.get(this.serveUrl +name).subscribe(res=>{
      this.modaldata=res;
      console.log(this.modaldata)
      $('#myModal').modal('show');
  },err=>{

  })
}


}

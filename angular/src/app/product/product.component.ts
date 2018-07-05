import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.constants';
import { HttpClient } from '@angular/common/http';
import {  ProductService } from "../providers/product.service";

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
   this.owl();
    }



  myInterval = 1500;
   activeSlideIndex = 0;

    slides = [
      {image: '../../../../assets/images/3.jpg'},
      {image: '../../../../assets/images/67.jpg'},
      {image: '../../../../assets/images/78.jpg'}
    ];

    getProduct(){
      this.ps.getProducts().subscribe(res=>{
          this.products=res;
          console.log(this.products)
      },err=>{
          this.loader=false;
      })
}

modal(name:any){
  this.http.get(this.serveUrl +name).subscribe(res=>{
      this.modaldata=res;
      console.log(this.modaldata)
      $('#myModal').modal('show');
  },err=>{
      this.loader=false;
  })
}


}

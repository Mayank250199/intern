import { Component, OnInit } from '@angular/core';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import {  HomeService } from "../providers/home.service";
import { Configuration } from '../app.constants';
import { HttpClient } from '@angular/common/http';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Slides:any;
  constructor(
  private http:HttpClient,
  private con:Configuration,
  public hs:HomeService,
) {
  this.serveUrl=this.con.server;
}
  ngOnInit() {
    this.slider();
  }
  myInterval = 2200;
   activeSlideIndex = 0;
    //
    // slides = [
    //   {image: '../../../../assets/images/3.jpg'},
    //   {image: '../../../../assets/images/67.jpg'},
    //   {image: '../../../../assets/images/78.jpg'}
    // ];

    slider(){
      this.hs.getSlider().subscribe(res=>{
          this.Slides=res;
        },err=>{
          this.loader=false;
      })
    }


}

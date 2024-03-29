import { ViewChild, Component, OnInit } from '@angular/core';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import {  HomeService } from "../providers/home.service";
import { Configuration } from '../app.constants';
import { HttpClient } from '@angular/common/http';
import {OwlCarousel} from 'ngx-owl-carousel';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Slides:any;
  serveUrl:any;
  marqueeData:any;

  constructor(
  private http:HttpClient,
  private con:Configuration,
  public hs:HomeService,
) {
}
  ngOnInit() {
    this.owl();
    this.slider();
    this.marquee();
  }

  // myInterval = 2200;
  //  activeSlideIndex = 0;

    // slides = [
    //   {image: '../../../../assets/images/3.jpg'},
    //   {image: '../../../../assets/images/67.jpg'},
    //   {image: '../../../../assets/images/78.jpg'}
    // ];

    slider(){
      this.hs.getSlider().subscribe(res=>{
          this.Slides=res;
          console.log(this.Slides)
        },err=>{

      })
    }

    
    marquee(){
      this.hs.getmarquee().subscribe(res=>{
          this.marqueeData=res;
          console.log(this.Slides)
        },err=>{

      })
    }

    owl(){
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

}

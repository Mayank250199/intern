import { Component, OnInit } from '@angular/core';
import {  AboutService } from "../providers/about.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
aboutText:any;
aboutPics:any;
works:any;

  constructor(
   private as : AboutService
  ) { }

  ngOnInit() {
  this.About();
  this.AboutPics();
  this.Work();
  }

  About(){
      this.as.getAboutText().subscribe(res=>{
          this.aboutText=res;
        },err=>{

      })
    }

    Work(){
      this.as.getWork().subscribe(res=>{
          this.works=res;
        },err=>{

      })
    }

  AboutPics(){
      this.as.getAboutPics().subscribe(res=>{
          this.aboutPics=res;
        },err=>{

      })
    }


}

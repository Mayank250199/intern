import { Component, OnInit } from '@angular/core';
import {  AboutService } from "../providers/about.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare let $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
aboutText:any;
contactform:FormGroup;
modalData:any;
address:any;
  constructor( private as : AboutService) { }

  ngOnInit() {
    this.About();
    this.contactform= this.ContactForm();
    this.Address();
  }

ContactForm(){
    return new FormGroup({
      name:new FormControl('',[Validators.required]),
      message: new FormControl('',[Validators.required, Validators.maxLength(250)]),
      phone: new FormControl('',[Validators.required,Validators.maxLength(10)]),
      email:new FormControl('', [Validators.required])
    })
  }

  ContactSubmit(){
    let formData = new FormData();
    formData.append('name',this.contactform.value['name']);
    formData.append('message', this.contactform.value['message']);
    formData.append('phone', this.contactform.value['phone']);
    formData.append('email', this.contactform.value['email']);
    this.as.postContact(formData).subscribe(res=>{
      this.modalData="Thank you for getting in touch!! We will contact you soon!!";
    },err=>{
     this.modalData="Something went wrong";
    })
  }

  About(){
    this.as.getAboutText().subscribe(res=>{
        this.aboutText=res;
      },err=>{

    })
  }

  Address(){
    this.as.getAddress().subscribe(res=>{
        this.address=res;
      },err=>{

    })
  }

}

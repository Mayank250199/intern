import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
serveUrl:any;
  constructor(
    private http:HttpClient,
    private con:Configuration,
  ) {
         this.serveUrl=this.con.server;
  }

  getAboutText(){
    return this.http.get(this.serveUrl +'About')
}

 getAboutPics(){
    return this.http.get(this.serveUrl +'getaboutpics')
}

postContact(formData){
  return this.http.post(this.serveUrl + 'contact',formData);
}

getWork(){
  return this.http.get(this.serveUrl +'work')
}

getAddress(){
  return this.http.get(this.serveUrl +'address')
}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
serveUrl:any;
  constructor(
    private http:HttpClient,
    private con:Configuration,
  ) {
         this.serveUrl=this.con.server;
  }

  getSlider(){
    return this.http.get(this.serveUrl +'slider')
}
}

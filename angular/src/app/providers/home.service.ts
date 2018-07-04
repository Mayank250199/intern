import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.constants';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http:HttpClient,
    private con:Configuration,
  ) {
         this.serveUrl=this.con.server;
  }

  getSlider(branch:any){
    return this.http.get(this.serveUrl +'slider')
}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.constants';


@Injectable()
export class ProductService {
serveUrl:any;
  constructor(
    private http:HttpClient,
    private con:Configuration,
  ) {
         this.serveUrl=this.con.server;
  }

  getProducts(){
    return this.http.get(this.serveUrl +'product');
}
}

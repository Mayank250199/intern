import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.constants';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ProductService {

  constructor(
    private http:HttpClient,
    private con:Configuration,
  ) {
         this.serveUrl=this.con.server;
  }

  getProducts(branch:any){
    return this.http.get(this.serveUrl +'product')
}
}

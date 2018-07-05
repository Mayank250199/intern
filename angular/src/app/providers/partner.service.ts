import { Injectable } from '@angular/core';
import { Configuration } from '../app.constants';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PartnerService {

  constructor(
    private http:HttpClient,
    private con:Configuration,
  ) {
    this.serveUrl=this.con.server;
  }

  getClient(){
    return this.http.get(this.serveUrl +'client');
}

}

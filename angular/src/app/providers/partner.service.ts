import { Injectable } from '@angular/core';
import { Configuration } from '../app.constants';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(
    private http:HttpClient,
    private con:Configuration,
  ) {
    this.serveUrl=this.con.server;
  }

  getClient(branch:any){
    return this.http.get(this.serveUrl +'client')
}

}

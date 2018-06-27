import { Injectable } from '@angular/core';

@Injectable()
export class Configuration{
    public url="http://localhost:4000/api"
    public server="http://localhost:4000/api/";

    constructor(){}
}

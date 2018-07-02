import { Injectable } from '@angular/core';

@Injectable()
export class Configuration{
    public url="http://localhost:3000/api"
    public server="http://localhost:3000/api/";

    constructor(){}
}

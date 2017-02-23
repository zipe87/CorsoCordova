import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Santo} from "../models/santo";

/*
  Generated class for the SantiService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SantiService {
  santi: Santo[];
  constructor(public http: Http) {
    this.santi = null;
    console.log('Hello SantiService Provider');
  }

  load(){
    if(this.santi){
      return Promise.resolve(this.santi);
    }
    return new Promise<Santo[]>(
      resolve => {
        this.http.get("http://santieicone.azurewebsites.net/saints")
        .map(res => res.json())
        .subscribe(dati => {
          this.santi = dati; 
          resolve(this.santi);
        })
      }
    );
  }

}

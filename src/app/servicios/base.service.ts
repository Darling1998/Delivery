import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private path: string = '';


  constructor() {
    this.path  = "http://localhost/allice/back-end-api/";
   }

   getPath(){
    return this.path;
  }
}

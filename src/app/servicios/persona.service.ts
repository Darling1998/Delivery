import { ILogin } from './../interfaces/interfaces';
import { webservice } from './../global-variables';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  path_base = webservice;

  constructor( private http:HttpClient) { }

  iniciarSeccion(user: ILogin){
    let body = JSON.stringify(user);
    console.log(body);
    const URL = this.path_base + 'persona/iniciarSeccion.php';
    let headers = new HttpHeaders({
      'Content-type' : 'application/json; charset=UTF-8'
    });

    let options = {
      headers: headers
    }
      
    return this.http.post<any>(URL, body, options);
  }

  enviarRegistro(data:any){
    //console.log(JSON.stringify(data));

    let json = JSON.stringify(data);
    let params = "data=" + json;

    const URL = this.path_base + 'persona/registro.php';
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      
    return this.http.post<any>(URL, params, {headers: headers});
  } 
}

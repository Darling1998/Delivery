import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor( private http:HttpClient, private baseService:BaseService) { }

  iniciarSeccion(data: any){
    let json = JSON.stringify(data);
    let urlCompleta = this.baseService.getPath() + 'persona/iniciarSeccion.php';
                 
    //El backend recogerá un parametro json
    let params = "data="+json;

    //Establecemos cabeceras
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      
    return this.http.post<any>(urlCompleta, params, {headers: headers});
  }
}

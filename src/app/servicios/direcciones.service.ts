import { IDirecciones } from './../interfaces/interfaces';
import { webservice } from './../global-variables';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DireccionesService {
  id_direccion: number;
  id_cliente: number;
  path_base = webservice;

  private direcciones$ = new Subject<any>();

  constructor(private http: HttpClient) { 
    this.id_direccion = 0;
    
  }

  getDireccionesDB(id: number){
    const URL = this.path_base + "/persona/direcciones.php?id=" + id; 
    return this.http.get<IDirecciones[]>(URL);
  }

  agregarDireccion(ubicacion: any) {
    this.direcciones$.next(ubicacion);
  }

  getDirecciones(): Observable<any> {
    return this.direcciones$.asObservable(); 
  }

  createDireccion(data){
    let body = JSON.stringify(data);
    console.log(body);
    const URL = this.path_base + "/persona/direcciones.php";
    let headers = new HttpHeaders({
      'Content-type' : 'application/json; charset=UTF-8'
    });

    let options = {
      headers: headers
    }
    return this.http.post<any>(URL, body, options); 
  }

  getDirrecionSeleccionda(idCliente, idDireccion){
    const URL = this.path_base + "/persona/direcciones.php?idCli="+idCliente+"&idDir="+idDireccion;
    return this.http.get<IDirecciones[]>(URL);
  }
}

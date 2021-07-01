import { webservice } from './../global-variables';
import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Producto } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  path_base = webservice;

  constructor(private http:HttpClient) { }
  
  getCervezas(){
    const URL = this.path_base + "producto/getTodosProductosCerveza.php";
    return this.http.get<Producto[]>(URL);
  }

  getLicores(){
    let url = this.path_base + 'producto/getTodosProductosLicores.php';
    return this.http.get<Producto[]>(url);
  }

  getPiqueos(){
    let url = this.path_base + 'producto/getTodosProductosPiqueos.php';
    return this.http.get<Producto[]>(url);
  }
}

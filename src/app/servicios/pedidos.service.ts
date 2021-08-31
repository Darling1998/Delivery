import { HttpClient } from '@angular/common/http';
import { webservice } from './../global-variables';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  url = webservice;

  constructor(private http: HttpClient) { }

  getPedidos(){
    const URL = this.url + "pedidos/pedidos.php";
    return this.http.get<any>(URL);
  }
}

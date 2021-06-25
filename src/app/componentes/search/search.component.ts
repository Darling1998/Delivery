import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  textBuscar: string="";
  @Output() textoFiltro = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {}

  buscar(event){
    this.textBuscar = event.detail.value;
    this.textoFiltro.emit(this.textBuscar);
  }
}

import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';


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

  onCancel(ev) { 
    // Reset the field
    ev.target.value = '';
    this.textBuscar = "";
  }

  reset(){
    this.textBuscar="";
  }
}

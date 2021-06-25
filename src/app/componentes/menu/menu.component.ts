import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  darkMode:boolean=false;

  constructor() { }

  ngOnInit() {}

  cambioCheck(){
    this.darkMode= !this.darkMode;
    document.body.classList.toggle('dark');
  } 

  cerrarCesion(){
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../../models/PersonaModel';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  darkMode:boolean=false;
  private personaSeccion: Persona;
  idRole: string = null;

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    /* this.personaSeccion= JSON.parse(localStorage.getItem('personaSeccion'));

    if(this.personaSeccion){
      this.idRole = this.personaSeccion.idRole;
    }else{
      this.router.navigateByUrl('/login');
    } */
  }

  cambioCheck(){
    this.darkMode= !this.darkMode;
    document.body.classList.toggle('dark');
  } 

  cerrarCesion(){
    /* let usuarioActual = JSON.parse(localStorage.getItem('personaSeccion'));

    if(usuarioActual){
        localStorage.clear();
        location.href = '/login';
        this.router.dispose();
    } */
  }

}

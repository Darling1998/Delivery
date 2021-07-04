import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/PersonaModel';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  personaLogin: Persona;

  @ViewChild('slidePrincipal') slides: IonSlides;

  loginUser = {
    email: '',
    password: ''
  };

  registerUser: any = {
    nombre: '',
    apellido: '',
    cedula: '',
    telefono: '',
    direccion: '',
    email: '',
    password: '',
  };

  constructor(private personaService: PersonaService,
              private router: Router,
              private menuCtrl: MenuController) {
    this.personaLogin = new Persona();
    this.personaLogin.correo = null;
    this.personaLogin.contrasena = null
  }

  ionViewWillEnter(){
    this.menuCtrl.swipeGesture(false, "primerMenu");
  }

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }

  login() {
    if (this.personaLogin.correo == null || this.personaLogin.contrasena == null) {

    } else {
      //console.log(this.usuarioLogin);
      this.logueando();
    }
  }

  logueando() {
    this.personaService.iniciarSeccion(this.personaLogin)
      .subscribe((data: any) => {

        if (data == null) {
          //this.generalService.error();
        } else {
          let personaSeccion = data;

          //localStorage.setItem('personaSeccion', JSON.stringify(personaSeccion));


          if (personaSeccion.idRole == '3') {
            this.router.navigateByUrl('/tabs/tab1');
            console.log("Redireccionar a pagina principal");
          }/* else 
          if(personaSeccion.id_rol == '2'){
            this.router.navigateByUrl('/menu/secretaria');
            console.log("Redireccionar a menu/Secretaria");
          }else 
          if(personaSeccion.id_rol == '3'){
            this.router.navigateByUrl('/menu/voluntario');
            console.log("Redireccionar a menu/Voluntario");
          } */
        }
      });
  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }
}

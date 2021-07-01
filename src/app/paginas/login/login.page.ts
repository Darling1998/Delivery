import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/PersonaModel';
import { GeneralService } from 'src/app/servicios/general.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  personaLogin:Persona; 

  constructor(
    private personaService:PersonaService, 
    private generalService:GeneralService, 
    private router:Router
    ) 
    { 
      this.personaLogin = new Persona();
      this.personaLogin.correo = null;
      this.personaLogin.contrasena = null
    }

  ngOnInit() {
    //this.personaLogin.correo;
    //this.personaLogin.contrasena;
  }

  login(){
    if(this.personaLogin.correo == null || this.personaLogin.contrasena == null){
      
      this.generalService.ToastColor("Ingrese las credenciales para inciar session","danger");
    }else{
      //console.log(this.usuarioLogin);
      //this.logueando();
    }
  }

  logueando(){
    this.personaService.iniciarSeccion(this.personaLogin)
    .subscribe((data:any) => {
      
      if(data == null){
        this.generalService.error();
      }else{
        let personaSeccion = data;
  
        localStorage.setItem('personaSeccion', JSON.stringify(personaSeccion));
        

        if(personaSeccion.idRole == '1'){
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


}

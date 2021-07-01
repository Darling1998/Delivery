import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/PersonaModel';
import { GeneralService } from 'src/app/servicios/general.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  
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

  constructor(
   /*  private storage: Storage, */
    ) 
    { }



    ionViewDidEnter() {
      this.slides.lockSwipes(true);
    }

    async login(flogin:NgForm){

      console.log(flogin.valid);

      if (flogin.valid)
      {

      let body={
        email:this.loginUser.email,
        password:this.loginUser.password
      }
    /*   const valido=await   this.autent.enviarData(body); */
     /*  if(valido){
       
        this.navCtrl.navigateRoot('/principal',{ animated:true});
      }else{
        this.ui.presentAlert("Usuario o Contraseña incorrectos.");
      } */

      }else{
        return ;
      }
    }


    registro(fRegistro:NgForm){
      console.log(fRegistro.valid);
  
      if (fRegistro.valid)
      {
        let body={
          name: this.registerUser.nombre,
          apellido: this.registerUser.apellido,
          cedula: this.registerUser.cedula,
          telefono: this.registerUser.telefono,
          direccion: this.registerUser.direccion,
          email: this.registerUser.email,
          password:this.registerUser.password
        }
  
/*         this.autent.enviarRegistro(body).subscribe((res:any)=>{
  
          console.log(res);
          if(res.message=='success'){
            //loader.dismiss();
            this.registerUser={}
            this.presentToast(res.toast);
            
            this.navCtrl.navigateRoot( '/registro', { animated: true } );
          }else{
            //loader.dismiss();
           // this.disabledButton=false
            this.presentToast("Ha ocurrido un error al Registrar");
          } 
  
          
  
        }); */
      }else{
       /*  this.ui.presentAlert("Formulario Inválido"); */
      }
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

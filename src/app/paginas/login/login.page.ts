import { ILogin } from './../../interfaces/interfaces';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController, NavController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  personaLogin: ILogin = {correo:"", contrasena:""};
  
  @ViewChild('slidePrincipal') slides: IonSlides;


  loginUser = {
    id:'',
    email: '',
    password: ''
  };

  registerUser: any = {
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    password: '',
    avatar:'',
  };



  constructor(private personaService: PersonaService,
              private router: Router,
              private menuCtrl: MenuController,
              private toastCtrl:ToastController,
              public navCtrl:NavController) {
  }

  ionViewWillEnter(){
    this.menuCtrl.swipeGesture(false, "primerMenu");
  }

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }

  login() {
    if (this.personaLogin.correo == null || this.personaLogin.contrasena == null) {
      return;
    } else {      //console.log(this.usuarioLogin);
      this.personaService.iniciarSeccion(this.personaLogin)
      .subscribe(data => {
        if(data['status'] == "error"){
          this.presentToast(data['message']);
        }else{
          this.personaLogin.correo = "";
          this.personaLogin.contrasena = "";
        
          let obj = JSON.stringify(data);
          let obj2 = obj.replace("[","").replace("]","");
          localStorage.setItem('info', obj2);
          this.router.navigate(['/tabs']);
        }
      });
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

  registro(fRegistro:NgForm){

    if(fRegistro.valid){
      this.personaService.enviarRegistro(this.registerUser).subscribe(res=>
        {
        console.log(res);
          if(res.success= true){
            localStorage.setItem('info', JSON.stringify(this.registerUser));
            this.presentToast(res.msg);
            
            this.navCtrl.navigateRoot( '/tabs/tab1', { animated: true } );
          }else{
            //loader.dismiss();
          // this.disabledButton=false
            this.presentToast("Ha ocurrido un error al Registrar");
          } 
       });
    }else{

    }
   
  }

  async presentToast(message){
    const toast = await this.toastCtrl.create({
      message,
      duration:1500
    });

    toast.present();
  }
}

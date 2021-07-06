import { ILogin } from './../../interfaces/interfaces';
import { NgForm } from '@angular/forms';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {
  personaLogin: ILogin;
  img;
  
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
    public navCtrl:NavController) { }

  ngOnInit() {
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

  async presentToast(a){
    const toast = await this.toastCtrl.create({
      message:a,
      duration:1500,
      position:'top'

    });

    toast.present();
  }

}

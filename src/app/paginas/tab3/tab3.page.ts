import { Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  registerUser: any = {
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    password: '',
    avatar:'',
  };
  type: string = "";
  informacion: any;
  img;

  constructor(private menuCtrl: MenuController,
              private router: Router,
              private alertCtrl:AlertController) {}

  ngOnInit(){
    this.type = "informacion"
    this.informacion = JSON.parse(localStorage.getItem('info'));
    this.img = this.informacion['avatar'];
    console.log(this.informacion);
  }

  ionViewWillEnter(){
    this.menuCtrl.swipeGesture(false, "primerMenu");
  }

  logOut(){
    if(JSON.parse(localStorage.getItem('info')) != null){
      this.alertCtrl.create({ 
        header:"Cerrar Sesión",
        message:"¿Esta Seguro de Cerrar Sesión?",
        buttons:[
          {
            text:"😥 Sí",
            handler:()=>{
              //localStorage.setItem("info", "");
              //this.informacion = {};
              localStorage.clear();
              location.href = '/login';
              this.router.dispose();
            }
          },
          {text:"😎 No"}
        ]
      }).then(alertEl=>alertEl.present());
    }
  }

  irEditar(){
    this.router.navigate(['/update-profile'])
  }
}

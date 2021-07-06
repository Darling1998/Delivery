import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  darkMode: boolean = false;
  idRole: string = null;

  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private alertCtrl: AlertController 
  ) { }

  ngOnInit() {

  }


  ionViewWillLeave(){
    //this.menuCtrl.toggle('principal');
    //this.menuCtrl.swipeGesture(false, 'principal');
  }


  cambioCheck() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }

  cerrarCesion() {
    if(JSON.parse(localStorage.getItem('info')) != null){
      this.alertCtrl.create({ 
        header:"Cerrar Sesión",
        message:"¿Esta Seguro de Cerrar Sesión?",
        buttons:[
          {
            text:"😥 Sí",
            handler:()=>{
              //localStorage.setItem("info", "");
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

}

import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(public alertController: AlertController, public toastController: ToastController) { }

  async AlertDefault(titulo:string, mensaje:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: titulo,
      subHeader: mensaje,
      message: '',
      buttons: ['OK']
    });

    await alert.present();
  }

  async Toast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    await toast.present();
  }

  async ToastColor(message, color) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 2000
    });
    await toast.present();
  }

  async error() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Credenciales incorrectas',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  validarCedula(cedula:string){
    if(cedula.length == 10){
        
      //Obtenemos el digito de la region que sonlos dos primeros digitos
      let digito_region = cedula.substring(0,2);
      
      //Pregunto si la region existe ecuador se divide en 24 regiones
      if( parseInt(digito_region) >= 1 && parseInt(digito_region) <=24 ){
        
        // Extraigo el ultimo digito
        let ultimo_digito:number  = parseInt(cedula.substring(9,10));

        //Agrupo todos los pares y los sumo
        let pares = parseInt(cedula.substring(1,2)) + parseInt(cedula.substring(3,4)) + parseInt(cedula.substring(5,6)) + parseInt(cedula.substring(7,8));

        //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
        let numero1:number = parseInt(cedula.substring(0,1));
        numero1 = (numero1 * 2);

        if( numero1 > 9 ){ numero1 = (numero1 - 9); }

        let numero3 = parseInt(cedula.substring(2,3));
        numero3 = (numero3 * 2);

        if( numero3 > 9 ){ numero3 = (numero3 - 9); }

        let numero5 = parseInt(cedula.substring(4,5));
        numero5 = (numero5 * 2);

        if( numero5 > 9 ){ numero5 = (numero5 - 9); }

        let numero7 = parseInt(cedula.substring(6,7));
        numero7 = (numero7 * 2);

        if( numero7 > 9 ){ numero7 = (numero7 - 9); }

        let numero9 = parseInt(cedula.substring(8,9));
        numero9 = (numero9 * 2);

        if( numero9 > 9 ){ numero9 = (numero9 - 9); }

        let impares:number = numero1 + numero3 + numero5 + numero7 + numero9;

        //Suma total
        let suma_total = (pares + impares);

        //extraemos el primero digito
        let primer_digito_suma = String(suma_total).substring(0,1);

        //Obtenemos la decena inmediata
        let decena = (parseInt(primer_digito_suma) + 1)  * 10;

        //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
        let digito_validador = decena - suma_total;

        //Si el digito validador es = a 10 toma el valor de 0
        if(digito_validador == 10)
          digito_validador = 0;

        //Validamos que el digito validador sea igual al de la cedula
        if(digito_validador == ultimo_digito){
          return true;
        }else{
          return false;
        }
        
      }else{
        // imprimimos en consola si la region no pertenece
        return false;
      }
   }else{
      //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
      return false;
   }  
  }

  validarEmail(correo:string) {
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(correo)) return true;
    else  return false;
  }

}

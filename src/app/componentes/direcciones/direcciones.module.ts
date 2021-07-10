import { DireccionesComponent } from './direcciones.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ DireccionesComponent ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ DireccionesComponent ]
})
export class DireccionesModule { }

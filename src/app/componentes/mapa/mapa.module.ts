import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MapaComponent],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ],
  exports:[MapaComponent]
})
export class MapaModule { }

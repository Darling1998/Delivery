import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisUbicacionesPageRoutingModule } from './mis-ubicaciones-routing.module';

import { MisUbicacionesPage } from './mis-ubicaciones.page';
import { MapaModule } from 'src/app/componentes/mapa/mapa.module';

@NgModule({
  imports: [
    CommonModule,
    MapaModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MisUbicacionesPageRoutingModule
  ],
  declarations: [MisUbicacionesPage]
})
export class MisUbicacionesPageModule {}

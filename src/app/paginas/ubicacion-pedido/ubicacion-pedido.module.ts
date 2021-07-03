import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbicacionPedidoPageRoutingModule } from './ubicacion-pedido-routing.module';

import { UbicacionPedidoPage } from './ubicacion-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicacionPedidoPageRoutingModule
  ],
  declarations: [UbicacionPedidoPage]
})
export class UbicacionPedidoPageModule {}

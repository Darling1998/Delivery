import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosRepPageRoutingModule } from './pedidos-rep-routing.module';

import { PedidosRepPage } from './pedidos-rep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosRepPageRoutingModule
  ],
  declarations: [PedidosRepPage]
})
export class PedidosRepPageModule {}

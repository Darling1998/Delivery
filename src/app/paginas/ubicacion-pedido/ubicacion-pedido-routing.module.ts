import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbicacionPedidoPage } from './ubicacion-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: UbicacionPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbicacionPedidoPageRoutingModule {}

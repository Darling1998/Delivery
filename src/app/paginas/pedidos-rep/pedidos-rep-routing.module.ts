import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosRepPage } from './pedidos-rep.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosRepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosRepPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAddressPage } from './modal-address.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAddressPageRoutingModule {}

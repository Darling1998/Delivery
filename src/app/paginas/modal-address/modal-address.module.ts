import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAddressPageRoutingModule } from './modal-address-routing.module';

import { ModalAddressPage } from './modal-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAddressPageRoutingModule
  ],
  declarations: [ModalAddressPage]
})
export class ModalAddressPageModule {}

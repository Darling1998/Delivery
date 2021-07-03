import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAddressPageRoutingModule } from './modal-address-routing.module';

import { ModalAddressPage } from './modal-address.page';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalAddressPageRoutingModule
  ],
  declarations: [ModalAddressPage]
})
export class ModalAddressPageModule {}

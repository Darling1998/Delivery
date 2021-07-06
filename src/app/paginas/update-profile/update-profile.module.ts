import { AvatarSelectorModule } from './../../componentes/avatar-selector/avatar-selector.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateProfilePageRoutingModule } from './update-profile-routing.module';

import { UpdateProfilePage } from './update-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarSelectorModule,
    UpdateProfilePageRoutingModule
  ],
  declarations: [UpdateProfilePage]
})
export class UpdateProfilePageModule {}

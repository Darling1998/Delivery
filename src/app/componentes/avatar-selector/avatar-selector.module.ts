import { IonicModule } from '@ionic/angular';
import { AvatarSelectorComponent } from './avatar-selector.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ AvatarSelectorComponent ],
  exports:[ AvatarSelectorComponent ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class AvatarSelectorModule { }

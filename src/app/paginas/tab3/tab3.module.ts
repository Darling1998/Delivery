import { MisPedidosModule } from './../../componentes/mis-pedidos/mis-pedidos.module';
import { AvatarSelectorModule } from './../../componentes/avatar-selector/avatar-selector.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    AvatarSelectorModule,
    MisPedidosModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}

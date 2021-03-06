import { DireccionesModule } from './../../componentes/direcciones/direcciones.module';
import { ProductoModule } from './../../componentes/producto/producto.module';
import { PipesModule } from './../../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PipesModule,
    Tab1PageRoutingModule,
    ProductoModule,
    DireccionesModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}

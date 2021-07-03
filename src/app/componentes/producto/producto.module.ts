import { PipesModule } from './../../pipes/pipes.module';
import { ProductoComponent } from './producto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule
  ],
  exports:[
    ProductoComponent
  ],
})
export class ProductoModule { }
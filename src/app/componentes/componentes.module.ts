import { PipesModule } from './../pipes/pipes.module';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [
    ProductoComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule
  ],
  exports:[
    ProductoComponent,
    SearchComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentesModule { }

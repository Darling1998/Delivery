import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiqueosComponent } from './piqueos/piqueos.component';
import { CervezasComponent } from './cervezas/cervezas.component';
import { LicoresComponent } from './licores/licores.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [PiqueosComponent,CervezasComponent,LicoresComponent,SearchComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[PiqueosComponent,CervezasComponent,LicoresComponent,SearchComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentesModule { }

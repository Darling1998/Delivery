import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisUbicacionesPage } from './mis-ubicaciones.page';

const routes: Routes = [
  {
    path: '',
    component: MisUbicacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisUbicacionesPageRoutingModule {}

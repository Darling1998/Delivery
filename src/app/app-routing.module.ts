import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./paginas/tabs/tabs.module').then( m => m.TabsPageModule )
  },
  {
    path: 'mis-ubicaciones',
    loadChildren: () => import('./paginas/mis-ubicaciones/mis-ubicaciones.module').then( m => m.MisUbicacionesPageModule )
  },
  {
    path: 'about',
    loadChildren: () => import('./paginas/about/about.module').then( m => m.AboutPageModule )
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule )
  },
  {
    path: 'ubicacion-pedido',
    loadChildren: () => import('./paginas/ubicacion-pedido/ubicacion-pedido.module').then( m => m.UbicacionPedidoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

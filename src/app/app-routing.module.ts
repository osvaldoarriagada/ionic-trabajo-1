import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'valoracion',
    loadChildren: () => import('./valoracion/valoracion.module').then( m => m.ValoracionPageModule)
  },
  {
    path: 'manitoarriba',
    loadChildren: () => import('./manitoarriba/manitoarriba.module').then( m => m.ManitoarribaPageModule)
  },
  {
    path: 'manitoabajo',
    loadChildren: () => import('./manitoabajo/manitoabajo.module').then( m => m.ManitoabajoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

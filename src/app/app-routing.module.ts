import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 
  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./pages/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  
 
  {
    path: 'inscription',
    loadChildren: () => import('./pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
 
  {
    path: 'restaurant/:id',
    loadChildren: () => import('./pages/restaurant/restaurant.module').then(m=>m.RestaurantPageModule)
  },

  // {
  //   path: 'fiche-info',
  //   loadChildren: () => import('./pages/fiche-info/fiche-info.module').then( m => m.FicheInfoPageModule)
  // },
  {
    path:'details-eleve/:id',
    loadChildren:()=>import('./pages/details-eleve/details-eleve.module').then(m=> m.DetailsElevePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

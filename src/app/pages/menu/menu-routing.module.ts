import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children :[
      {
        path : 'home',
        children : [
        {
          path : '',
          loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)
        }
        ]
       
      },
      {
        path : 'favoris',
        children : [
          {
            path : '',
        loadChildren: () => import('./favoris/favoris.module').then( m => m.FavorisPageModule)
      }
    ]
   
      },
      {
        path : 'profil',
        children : [
          {
            path : '',
        loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
      }
    ]
      },
      {
        path : 'recherche',
        children : [
          {
            path : '',
        loadChildren: () => import('./recherche/recherche.module').then( m => m.RecherchePageModule)
      }
    ]
      },
      
      {
        path:'',
        redirectTo : 'menu/home',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo : 'menu/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {
  
}


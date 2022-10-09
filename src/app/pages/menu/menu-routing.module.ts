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
        path : 'fiche-info',
        children : [
          {
            path : '',
        loadChildren: () => import('../fiche-info/fiche-info.module').then(m=>m.FicheInfoPageModule)
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


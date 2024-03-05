import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeSiteComponent } from './components/home-site/home-site.component';
import { UsuarioSiteComponent } from './components/usuario-site/usuario-site.component';
import { DataSiteComponent } from './components/data-site/data-site.component';
import { ListaSiteComponent } from './components/lista-site/lista-site.component';

const routes: Routes = [
  { path: '', component: HomeSiteComponent },

  { path: 'data/:id', component: DataSiteComponent },

  { path: 'lista', component: ListaSiteComponent},

  { path: 'user', component: UsuarioSiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

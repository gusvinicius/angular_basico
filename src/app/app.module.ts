import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoSiteComponent } from './components/topo-site/topo-site.component';
import { HomeSiteComponent } from './components/home-site/home-site.component';
import { UsuarioSiteComponent } from './components/usuario-site/usuario-site.component';
import { DataSiteComponent } from './components/data-site/data-site.component';
import { ListaSiteComponent } from './components/lista-site/lista-site.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoSiteComponent,
    HomeSiteComponent,
    UsuarioSiteComponent,
    DataSiteComponent,
    ListaSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

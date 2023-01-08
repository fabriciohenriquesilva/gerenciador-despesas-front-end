import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarCredoresComponent } from './components/credor/listar-credores/listar-credores.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarCredoresComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

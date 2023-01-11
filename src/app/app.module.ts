import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarCredoresComponent } from './components/pessoa/listar-pessoas/listar-pessoas.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { CadastrarPessoaComponent } from './components/pessoa/cadastrar-pessoa/cadastrar-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarCredoresComponent,
    SidebarComponent,
    CadastrarPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

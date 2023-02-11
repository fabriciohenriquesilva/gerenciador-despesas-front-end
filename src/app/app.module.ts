import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localeBr from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { CadastrarPessoaComponent } from './components/pessoa/cadastrar-pessoa/cadastrar-pessoa.component';
import { PaginationComponent } from './components/navigation/pagination/pagination.component';
import { ListarPessoasComponent } from './components/pessoa/listar-pessoas/listar-pessoas.component';
import { EditarPessoaComponent } from './components/pessoa/editar-pessoa/editar-pessoa.component';
import { ListarDespesasComponent } from './components/despesa/listar-despesas/listar-despesas.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeBr);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CadastrarPessoaComponent,
    ListarPessoasComponent,
    PaginationComponent,
    EditarPessoaComponent,
    ListarDespesasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

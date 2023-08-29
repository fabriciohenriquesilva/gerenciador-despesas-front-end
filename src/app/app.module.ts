import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import localeBr from '@angular/common/locales/pt';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {registerLocaleData} from '@angular/common';

import {DespesaModule} from './components/despesa/despesa.module';
import {PessoaModule} from './components/pessoa/pessoa.module';
import {NavigationModule} from './shared/navigation/navigation.module';
import {CategoriaModule} from './components/categoria/categoria.module';
import {SubcategoriaModule} from "./components/subcategoria/subcategoria.module";

registerLocaleData(localeBr);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NavigationModule,
    DespesaModule,
    PessoaModule,
    CategoriaModule,
    SubcategoriaModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

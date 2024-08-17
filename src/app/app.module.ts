import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import localeBr from '@angular/common/locales/pt';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {registerLocaleData} from '@angular/common';

import {DespesaModule} from './pages/despesa/despesa.module';
import {PessoaModule} from './pages/pessoa/pessoa.module';
import {NavigationModule} from './shared/navigation/navigation.module';
import {CategoriaModule} from './pages/categoria/categoria.module';

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
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

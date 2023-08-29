import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ListarPessoasComponent} from './listar-pessoas/listar-pessoas.component';
import {CadastrarPessoaComponent} from './cadastrar-pessoa/cadastrar-pessoa.component';
import {EditarPessoaComponent} from './editar-pessoa/editar-pessoa.component';
import {PessoaService} from './pessoa.service';
import {NavigationModule} from '../../shared/navigation/navigation.module';
import {PessoaRoutingModule} from './pessoa-routing.module';
import {PessoaComponent} from './pessoa.component';
import {DocumentoPipe} from './documento.pipe';

@NgModule({
  declarations: [
    ListarPessoasComponent,
    CadastrarPessoaComponent,
    EditarPessoaComponent,
    PessoaComponent,
    DocumentoPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PessoaRoutingModule,
    ReactiveFormsModule,
    NavigationModule
  ],
  providers: [PessoaService]
})
export class PessoaModule {
}

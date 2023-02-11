import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListarPessoasComponent } from './listar-pessoas/listar-pessoas.component';
import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { PessoaService } from './pessoa.service';
import { NavigationModule } from '../navigation/navigation.module';
import { PessoaRoutingModule } from './pessoa-routing.module';

@NgModule({
  declarations: [
    ListarPessoasComponent,
    CadastrarPessoaComponent,
    EditarPessoaComponent,
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
export class PessoaModule { }

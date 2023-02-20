import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListarDespesasComponent } from './listar-despesas/listar-despesas.component';
import { DespesaRoutingModule } from './despesa-routing.module';
import { DespesaService } from './despesa.service';
import { NavigationModule } from '../navigation/navigation.module';
import { CadastrarDepesaComponent } from './cadastrar-depesa/cadastrar-depesa.component';
import { DespesaComponent } from './despesa.component';

@NgModule({
  declarations: [
    ListarDespesasComponent,
    CadastrarDepesaComponent,
    DespesaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DespesaRoutingModule,
    NavigationModule
  ],
  providers: [DespesaService]
})
export class DespesaModule { }

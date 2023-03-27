import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NavigationModule } from '../navigation/navigation.module';
import { CategoriaComponent } from './categoria.component';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { CategoriaService } from './categoria.service';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { CadastrarCategoriaComponent } from './cadastrar-categoria/cadastrar-categoria.component';
import { InputFieldComponent } from 'src/app/shared/input-field/input-field.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CategoriaComponent,
    ListarCategoriasComponent,
    EditarCategoriaComponent,
    CadastrarCategoriaComponent,
  ],
  imports: [
    CommonModule,
    NavigationModule,
    ReactiveFormsModule,
    CategoriaRoutingModule,
    SharedModule
  ],
  providers: [
    CategoriaService
  ]
})
export class CategoriaModule { }

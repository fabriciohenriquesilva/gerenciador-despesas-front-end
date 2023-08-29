import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubcategoriaListComponent} from './subcategoria-list/subcategoria-list.component';
import {NavigationModule} from "../../shared/navigation/navigation.module";
import {SubcategoriaFormComponent} from './subcategoria-form/subcategoria-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {SubcategoriaService} from "./subcategoria.service";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    SubcategoriaListComponent,
    SubcategoriaFormComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterLink
  ],
  providers: [
    SubcategoriaService
  ]
})
export class SubcategoriaModule {
}

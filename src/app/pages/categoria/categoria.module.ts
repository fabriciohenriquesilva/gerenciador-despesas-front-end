import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NavigationModule} from "../../shared/navigation/navigation.module";
import {CategoriaRoutingModule} from './categoria-routing.module';
import {CategoriaService} from './categoria.service';
import {CategoriaListComponent} from './categoria-list/categoria-list.component';
import {TableModule} from "primeng/table";
import {CategoriaFormComponent} from './categoria-form/categoria-form.component';
import {SharedModule} from "../../shared/shared.module";
import {AutoCompleteModule} from "primeng/autocomplete";
import {ButtonModule} from "primeng/button";

@NgModule({
    declarations: [
        CategoriaListComponent,
        CategoriaFormComponent,
    ],
    imports: [
        CommonModule,
        NavigationModule,
        ReactiveFormsModule,
        CategoriaRoutingModule,
        SharedModule,
        TableModule,
        SharedModule,
        AutoCompleteModule,
        FormsModule,
        ButtonModule
    ],
    providers: [
        CategoriaService
    ]
})
export class CategoriaModule {
}

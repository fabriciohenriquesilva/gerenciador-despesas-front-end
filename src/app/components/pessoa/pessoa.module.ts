import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {PessoaService} from './pessoa.service';
import {NavigationModule} from '../../shared/navigation/navigation.module';
import {PessoaRoutingModule} from './pessoa-routing.module';
import {PessoaComponent} from './pessoa.component';
import {DocumentoPipe} from './documento.pipe';
import {PessoaListComponent} from './pessoa-list/pessoa-list.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {PessoaFormComponent} from './pessoa-form/pessoa-form.component';

@NgModule({
    declarations: [
        PessoaComponent,
        DocumentoPipe,
        PessoaListComponent,
        PessoaFormComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        PessoaRoutingModule,
        ReactiveFormsModule,
        NavigationModule,
        TableModule,
        ButtonModule,
        DividerModule,
    ],
    providers: [PessoaService]
})
export class PessoaModule {
}

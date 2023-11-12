import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DespesaRoutingModule} from './despesa-routing.module';
import {DespesaService} from './despesa.service';
import {NavigationModule} from '../../shared/navigation/navigation.module';
import {DespesaListComponent} from './despesa-list/despesa-list.component';
import {DespesaFormComponent} from './despesa-form/despesa-form.component';
import {TableModule} from "primeng/table";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [
        DespesaListComponent,
        DespesaFormComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DespesaRoutingModule,
        NavigationModule,
        SharedModule,
        TableModule
    ],
    providers: [
        DespesaService,
        CurrencyPipe
    ]
})
export class DespesaModule {
}

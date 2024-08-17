import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InputFieldComponent} from './input-field/input-field.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectInputComponent} from './select-input/select-input.component';
import {DropdownModule} from "primeng/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
    declarations: [
        InputFieldComponent,
        SelectInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownModule,
        BrowserAnimationsModule,
        InputTextModule
    ],
    exports: [
        InputFieldComponent,
        SelectInputComponent
    ]
})
export class SharedModule {
}

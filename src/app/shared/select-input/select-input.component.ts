import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

const SELECT_INPUT_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectInputComponent),
    multi: true
}

@Component({
    selector: 'fec-select-input',
    templateUrl: './select-input.component.html',
    styleUrls: ['./select-input.component.scss'],
    providers: [SELECT_INPUT_VALUE_ACCESSOR]
})
export class SelectInputComponent<T> implements ControlValueAccessor {

    @Input()
    isReadOnly: boolean = false;

    @Input()
    label: string = '';

    @Input()
    placeholder: string = '';

    @Input()
    key: string = '';

    @Input()
    expression: string = '';

    @Input()
    optional: boolean = false;

    @Input()
    control: any | FormControl;

    @Input()
    items: T[] = [];

    constructor() {
    }

    private _value: any;

    get value() {
        return this._value;
    }

    set value(v: T) {
        if (v !== this._value) {
            this._value = v;
            this.onChangeCb(v);
        }
    }

    onChangeCb: (_: any) => void = () => {
    };
    onTouchedCb: (_: any) => void = () => {
    };

    writeValue(v: T): void {
        if (v !== this._value) {
            this._value = v;
            this.onChangeCb(v);
        }
    }

    registerOnChange(fn: any): void {
        this.onChangeCb = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchedCb = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.isReadOnly = isDisabled;
    }

    getLabel(): string {
        if (this.optional && this.label) {
            return this.label + " (opcional)"
        }
        return this.label;
    }

    hasError(): string {
        if (this.control?.errors?.['required'] && this.control?.touched) {
            return "has-error";
        }
        return "";
    }

    checkValidity(): void {
        (this.control as FormControl).markAsDirty();
        (this.control as FormControl).markAsTouched();
    }

}

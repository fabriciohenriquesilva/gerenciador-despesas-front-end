import {Component, ElementRef, EventEmitter, forwardRef, Input, Output, Renderer2, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const INPUT_FIELD_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true
}

@Component({
  selector: 'text-input',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [INPUT_FIELD_VALUE_ACESSOR]
})
export class InputFieldComponent implements ControlValueAccessor {

    private _value: string = "";

    @ViewChild('inputElement', {static: true})
    elementRef!: ElementRef<HTMLInputElement>;

    @Input()
    label: string = "";

    @Input()
    placeholder: string = "";

    @Input()
    field: string = "";

    @Input()
    width: string = "";

    @Input()
    isReadOnly: boolean = false;

    @Input()
    isDisabled: boolean = false;

    @Output()
    valueChange: EventEmitter<string> = new EventEmitter<string>();

    constructor(private _renderer: Renderer2) {
    }

    get value(): string {
        return this._value;
    }

    @Input()
    set value(value: string) {
        if (value !== this._value) {
            this._value = value;
            this.onChangeCb(value);
            this.valueChange.emit(this._value);
        }
    }

    onChangeCb: (_: any) => void = () => {
    };
    onTouchedCb: (_: any) => void = () => {
    };

    writeValue(value: any): void {
        if (value !== this._value) {
            this._value = value;
            this.onChangeCb(value);
        }
    }

    registerOnChange(fn: any): void {
        this.onChangeCb = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchedCb = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this._renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }

}

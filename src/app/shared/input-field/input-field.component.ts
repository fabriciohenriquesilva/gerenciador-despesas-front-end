import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

const INPUT_FIELD_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true
}

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [INPUT_FIELD_VALUE_ACESSOR]
})
export class InputFieldComponent implements ControlValueAccessor {

  @Input() label = '';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() id!: string;
  @Input() isReadOnly = false;
  @Input() control: any | FormControl;
  @Input() optional: boolean = false;

  private innerValue: any;

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  constructor() {
  }

  onChangeCb: (_: any) => void = () => {
  };
  onTouchedCb: (_: any) => void = () => {
  };

  writeValue(v: any): void {
    if (v !== this.innerValue) {
      this.innerValue = v;
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
    if (this.optional) {
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

}

import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output, SimpleChanges
} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {untilDestroyed} from "../models/until-destroyed";
import {decimalsValidator, integerValidator} from "../validators/validators";

export enum FormFieldTypes {
  DATE = 'date',
  NUMBER = 'number',
  INTEGER = 'Integer',
  TEXT = 'text',
  RETURN_VALUE = 'returnValue'
}

export type FormFieldType = keyof Record<FormFieldTypes, string>;

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldComponent),
      multi: true
    }
  ]
})
export class FormFieldComponent implements OnInit, ControlValueAccessor, OnChanges, OnDestroy {
  fc: FormControl = new FormControl();

  @Input() type: FormFieldType | null = null;
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() maxLength: number;

  @Output() call = new EventEmitter();
  @Output() send = new EventEmitter();

  selectValue: string = '';
  FormFieldTypes = FormFieldTypes;

  constructor(private cd: ChangeDetectorRef) {
  }

  @Input()
  get value() {
    return this.selectValue;
  }

  set value(val: string) {
    this.selectValue = val;
  }


  ngOnInit() {
    this.fc.valueChanges.pipe(untilDestroyed(this)).subscribe(val => {
      this.selectValue = val;
      this.onChange(val);
      this.cd.detectChanges();
    });

    if (this.type === FormFieldTypes.NUMBER) {
      this.fc.setValidators(decimalsValidator(7, 2));
    }

    if (this.type === FormFieldTypes.INTEGER) {
      this.fc.setValidators(integerValidator(5));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.disabled && changes.disabled.currentValue !== changes.disabled.previousValue) {
      if (this.disabled) {
        this.fc.disable();
      } else {
        this.fc.enable();
      }
    }
  }

  ngOnDestroy() {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }


  onChange: (val: string | number) => string | number = () => '';

  onTouched: () => boolean = () => false;


}

import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidatorFn } from '@angular/forms';
import * as moment from 'moment';

@Directive({
  selector: '[appDateValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateValidatorDirective, multi: true}]
})
export class DateValidatorDirective implements Validator {
  @Input('appDateValidator') format: string;
 
  public validate(control: AbstractControl): {[key: string] : any} | null {
    return this.format ? dateValidator(this.format)(control) : null;
  }
}

export function dateValidator(format: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const date = control.value;
    return moment(date, format, true).isValid() ? null : {'invalidDate': {value: date}};
  };
}
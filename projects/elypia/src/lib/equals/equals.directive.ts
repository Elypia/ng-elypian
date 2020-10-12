import {Directive, Input} from '@angular/core';
import {FormGroup, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[elyEquals]',
  providers: [{provide: NG_VALIDATORS, useExisting: EqualsDirective, multi: true}]
})
export class EqualsDirective implements Validator {

  /** The name attribute of the input elements to compare. */
  @Input() elyEquals: string[];

  validate(control: FormGroup): ValidationErrors | null {
    const controls = control.controls;
    let previous: any = null;

    for (const elyEqual of this.elyEquals) {
      const elyControl = controls[elyEqual];

      if (!elyControl)
        continue;

      const elyValue = elyControl.value;

      if (previous != null && previous !== elyValue)
        return {equals: 'failed'};

      previous = elyValue;
    }

    return null;
  }
}

import {Component, Input} from '@angular/core';
import {ErrorStateMatcher} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

class DefaultErrorStateMachine implements ErrorStateMatcher {

  public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.value && form.invalid;
  }
}

@Component({
  selector: 'app-equals-validator-example',
  templateUrl: './equals-validator-example.component.html',
  styleUrls: ['./equals-validator-example.component.css']
})
export class EqualsValidatorExampleComponent {
  @Input() public password: string;
  @Input() public verifyPassword: string;

  public readonly matcher: DefaultErrorStateMachine = new DefaultErrorStateMachine();
}

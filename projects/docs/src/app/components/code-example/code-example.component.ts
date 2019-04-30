import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css']
})
export class CodeExampleComponent {

  @Input() name: string;

  public viewCode: boolean = false;
}

import {Component, Input} from '@angular/core';
import {LoadState} from '../loadable/loading';

@Component({
  selector: 'ely-stateful-button',
  templateUrl: './stateful-button.component.html',
  styleUrls: ['./stateful-button.component.css']
})
export class StatefulButtonComponent {
  public readonly LoadState = LoadState;
  @Input() public state: LoadState;
}

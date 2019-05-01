import {Component, Input} from '@angular/core';
import {LoadState} from '../../../../../elypian/src/lib/loading';

@Component({
  selector: 'app-stateful-button-example',
  templateUrl: './stateful-button-example.component.html',
  styleUrls: ['./stateful-button-example.component.css']
})
export class StatefulButtonExampleComponent {
  public readonly LoadState = LoadState;
  @Input() public state: LoadState = LoadState.NotLoaded;
}

import {Component, Input} from '@angular/core';
import {LoadState} from '../loading';

@Component({
  selector: 'ely-loadable',
  templateUrl: './loadable.component.html',
  styleUrls: ['./loadable.component.css']
})
export class LoadableComponent {
  public readonly LoadState = LoadState;
  @Input() public state: LoadState;
  @Input() public spinnerDiameter: number = 64;
}

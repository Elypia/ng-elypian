import {Component} from '@angular/core';
import {LoadState} from '../../../../../elypia/src/lib/loadable/loading';

@Component({
  selector: 'app-loadable-example',
  templateUrl: './loadable-example.component.html',
  styleUrls: ['./loadable-example.component.css']
})
export class LoadableExampleComponent {
  public readonly LoadState = LoadState;
  public state: LoadState = LoadState.Loading;
}

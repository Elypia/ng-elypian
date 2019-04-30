import {Injectable} from '@angular/core';
import {LoadableExampleComponent} from '../examples/loadable-example/loadable-example.component';
import {StatefulButtonExampleComponent} from '../examples/stateful-button-example/stateful-button-example.component';
import {TimestampExampleComponent} from '../examples/timestamp-example/timestamp-example.component';

export interface DocItem {
  id: string;
  name: string;
  summary: string;
  examples: any[];
}

@Injectable({
  providedIn: 'root'
})
export class DocService {

  public readonly Docs: DocItem[] = [
    {
      id: 'loadable',
      name: 'Loadable',
      summary: 'A panel to manage loadable content and manage unloaded, loading, loaded and failed states.',
      examples: [
        LoadableExampleComponent
      ]
    },
    {
      id: 'stateful-button',
      name: 'Stateful Button',
      summary: 'A clickable button that displays the state of it\'s action.',
      examples: [
        StatefulButtonExampleComponent
      ]
    },
    {
      id: 'timestamp',
      name: 'Timestamp',
      summary: 'A simple timestamp that conveys date information and last modification.',
      examples: [
        TimestampExampleComponent
      ]
    }
  ];

  getItem(id: string): DocItem {
    return this.Docs.find(d => d.id === id);
  }
}

import {Injectable} from '@angular/core';
import {LoadableExampleComponent} from '../examples/loadable-example/loadable-example.component';
import {StatefulButtonExampleComponent} from '../examples/stateful-button-example/stateful-button-example.component';
import {TimestampExampleComponent} from '../examples/timestamp-example/timestamp-example.component';
import {ModifiedTimestampExampleComponent} from '../examples/modified-timestamp-example/modified-timestamp-example.component';
import {TimestampFaExampleComponent} from '../examples/timestamp-fa-example/timestamp-fa-example.component';

export interface DocItem {
  id: string;
  name: string;
  summary: string;
  examples: DocExample[];
}

export interface DocExample {
  id: string;
  name: string;
  example: any;
}

@Injectable({
  providedIn: 'root'
})
export class DocService {

  private static readonly ExampleUrl: string = '/examples/';

  public readonly Docs: DocItem[] = [
    {
      id: 'loadable',
      name: 'Loadable',
      summary: 'A panel to manage loadable content and manage unloaded, loading, loaded and failed states.',
      examples: [
        {
          id: 'loadable',
          name: 'Minimal Loading',
          example: LoadableExampleComponent
        }
      ]
    },
    {
      id: 'stateful-button',
      name: 'Stateful Button',
      summary: 'A clickable button that displays the state of it\'s action.',
      examples: [
        {
          id: 'stateful-button',
          name: 'Minimal Stateful Button',
          example: StatefulButtonExampleComponent
        }
      ]
    },
    {
      id: 'timestamp',
      name: 'Timestamp',
      summary: 'A simple timestamp that conveys date information and last modification.',
      examples: [
        {
          id: 'timestamp',
          name: 'Current Timestamp',
          example: TimestampExampleComponent
        },
        {
          id: 'modified-timestamp',
          name: 'Modified Timestamp',
          example: ModifiedTimestampExampleComponent
        },
        {
          id: 'timestamp-fa',
          name: 'Modified Timestamp with FontAwesome',
          example: TimestampFaExampleComponent
        }
      ]
    }
  ];

  public getItem(id: string): DocItem {
    return this.Docs.find(d => d.id === id);
  }

  public getFile(id: string, type: string): string {
    return `${DocService.ExampleUrl}${id}-example/${id}-example.component.${type}`;
  }
}

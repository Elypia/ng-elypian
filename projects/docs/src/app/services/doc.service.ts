import {Injectable} from '@angular/core';
import {LoadableExampleComponent} from '../examples/loadable-example/loadable-example.component';
import {StatefulButtonExampleComponent} from '../examples/stateful-button-example/stateful-button-example.component';
import {TimestampExampleComponent} from '../examples/timestamp-example/timestamp-example.component';
import {ModifiedTimestampExampleComponent} from '../examples/modified-timestamp-example/modified-timestamp-example.component';
import {TimestampFaExampleComponent} from '../examples/timestamp-fa-example/timestamp-fa-example.component';
import {EqualsValidatorExampleComponent} from '../examples/equals-validator-example/equals-validator-example.component';
import {MarkdownService} from 'ngx-markdown';
import {Observable} from 'rxjs';

export interface DocGroup {
  name: string;
  items: DocItem[];
}

export interface DocItem {
  id: string;
  name: string;
  summary: string;
  api: string;
  examples: DocExample[];
}

export interface DocExample {
  id: string;
  name: string;
  example: any;
  css: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DocService {

  private static readonly ExampleUrl: string = '/examples/';

  private readonly cache: Map<string, Observable<string>> = new Map<string, Observable<string>>();

  private readonly Groups: DocGroup[] = [
    {
      name: 'Components',
      items: [
        {
          id: 'loadable',
          name: 'Loadable',
          summary:
            `A panel to manage loadable content and manage unloaded, loading, loaded and failed states.  
             To use this one will have to have an use the \`LoadState\` \`enum\` and pass it to the \`ely-loadable\`
             component which will allow it to know what state it's in.`,
          api: '',
          examples: [
            {
              id: 'loadable',
              name: 'Minimal Loading',
              example: LoadableExampleComponent,
              css: true
            }
          ]
        },
        {
          id: 'stateful-button',
          name: 'Stateful Button',
          summary: 'A clickable button that displays the state of it\'s action.',
          api: '',
          examples: [
            {
              id: 'stateful-button',
              name: 'Minimal Stateful Button',
              example: StatefulButtonExampleComponent,
              css: true
            }
          ]
        },
        {
          id: 'timestamp',
          name: 'Timestamp',
          summary: 'A simple timestamp that conveys date information and last modification.',
          api: '',
          examples: [
            {
              id: 'timestamp',
              name: 'Current Timestamp',
              example: TimestampExampleComponent,
              css: false
            },
            {
              id: 'modified-timestamp',
              name: 'Modified Timestamp',
              example: ModifiedTimestampExampleComponent,
              css: false
            },
            {
              id: 'timestamp-fa',
              name: 'Modified Timestamp with FontAwesome',
              example: TimestampFaExampleComponent,
              css: false
            }
          ]
        }
      ]
    },
    {
      name: 'Validators',
      items: [
        {
          id: 'equals',
          name: 'Equals Validator',
          summary: 'Equals validation to ensure to form fields are the same value, for example to verify a password.',
          api: '',
          examples: [
            {
              id: 'equals-validator',
              name: 'Password Validation with MatFormField',
              example: EqualsValidatorExampleComponent,
              css: true
            }
          ]
        }
      ]
    }
  ];

  constructor(private markdownService: MarkdownService) {

  }

  public getFileContent(id: string, type: string): Observable<string> {
    const path: string = `${DocService.ExampleUrl}${id}-example/${id}-example.component.${type}`;

    if (this.cache.has(path))
      return this.cache.get(path);

    return this.markdownService.getSource(path).pipe((o) => {
      this.cache.set(path, o);
      return o;
    });
  }

  public getItem(id: string): DocItem {
    for (const group of this.Groups) {
      for (const item of group.items) {
        if (item.id === id)
          return item;
      }
    }

    return null;
  }
}

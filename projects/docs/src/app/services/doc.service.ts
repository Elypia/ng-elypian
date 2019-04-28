import {Injectable} from '@angular/core';

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

      ]
    },
    {
      id: 'stateful-button',
      name: 'Stateful Button',
      summary: 'A clickable button that displays the state of it\'s action.',
      examples: [

      ]
    },
    {
      id: 'timestamp',
      name: 'Timestamp',
      summary: 'A simple timestamp that conveys date information and last modification.',
      examples: [

      ]
    }
  ];

  getItem(id: string): DocItem {
    return this.Docs.find(d => d.id === id);
  }
}

export interface DocItem {
  id: string;
  name: string;
  summary?: string;
  examples?: string[];
}

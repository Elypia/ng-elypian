import {TestBed} from '@angular/core/testing';

import {DocService} from './doc.service';
import {MarkdownModule, MarkdownService, MarkedOptions} from 'ngx-markdown';

describe('DocService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      MarkdownModule.forRoot({markedOptions: {provide: MarkedOptions}}),
    ],
    providers: [
      MarkdownService
    ]
  }));

  it('should be created', () => {
    const service: DocService = TestBed.get(DocService);
    expect(service).toBeTruthy();
  });
});

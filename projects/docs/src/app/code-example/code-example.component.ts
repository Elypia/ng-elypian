import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DocExample, DocItem, DocService} from '../services/doc.service';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css']
})
export class CodeExampleComponent implements OnInit {

  @ViewChild('element', {read: ViewContainerRef}) private element;

  @Input() doc: DocItem;
  @Input() example: DocExample;

  public viewCode: boolean = false;

  constructor(
    private resolver: ComponentFactoryResolver,
    private docs: DocService
  ) {}

  ngOnInit(): void {
    if (this.example)
      this.element.createComponent(this.resolver.resolveComponentFactory(this.example.example));
  }

  public getFile(type: string) {
    return this.docs.getFile(this.example.id, type);
  }
}

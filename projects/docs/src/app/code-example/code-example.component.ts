import {AfterViewInit, Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef} from '@angular/core';
import {DocExample, DocItem, DocService} from '../services/doc.service';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css']
})
export class CodeExampleComponent implements AfterViewInit {

  @ViewChild('element', {read: ViewContainerRef}) public element;

  @Input() doc: DocItem;
  @Input() example: DocExample;

  public viewCode: boolean = false;

  constructor(
    private resolver: ComponentFactoryResolver,
    private docs: DocService
  ) {}

  ngAfterViewInit(): void {
    if (this.example)
      this.element.createComponent(this.resolver.resolveComponentFactory(this.example.example));
  }

  public getFile(type: string) {
    return this.docs.getFile(this.example.id, type);
  }
}

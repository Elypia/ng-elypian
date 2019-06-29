import {AfterViewInit, Component, ComponentFactoryResolver, Input, ViewChild} from '@angular/core';
import {DocExample, DocItem, DocService} from '../services/doc.service';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css']
})
export class CodeExampleComponent implements AfterViewInit {

  @ViewChild('element', {static: false}) public element;

  @Input() doc: DocItem;
  @Input() example: DocExample;

  public viewCode: boolean = false;

  constructor(
    private resolver: ComponentFactoryResolver,
    private docs: DocService
  ) {}

  ngAfterViewInit(): void {
    if (!this.example)
      return;

    console.log(`Creating element for example: ${this.example.name}`);
    this.element.createComponent(this.resolver.resolveComponentFactory(this.example.example));
  }

  public getFile(type: string) {
    return this.docs.getFile(this.example.id, type);
  }
}

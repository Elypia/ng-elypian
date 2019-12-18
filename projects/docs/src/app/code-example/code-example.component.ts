import {AfterViewInit, Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef} from '@angular/core';
import {DocExample, DocItem, DocService} from '../services/doc.service';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css']
})
export class CodeExampleComponent implements AfterViewInit {

  @ViewChild('element', { read: ViewContainerRef }) public element: ViewContainerRef;

  @Input() doc: DocItem;
  @Input() example: DocExample;

  public viewCode: boolean = false;

  public html: string;
  public ts: string;
  public css: string;

  constructor(
    private resolver: ComponentFactoryResolver,
    private docs: DocService
  ) {}

  public ngAfterViewInit(): void {
    if (!this.element || !this.example)
      return;

    console.log('Injecting into element:', this.element);
    console.log(`Creating element for example: ${this.example.name}`);
    this.element.createComponent(this.resolver.resolveComponentFactory(this.example.example));
  }

  public onViewCodeChange(checked: boolean): void {
    this.viewCode = checked;

    this.docs.getFileContent(this.example.id, 'html').subscribe(
      (content: string) => this.html = content
    );

    this.docs.getFileContent(this.example.id, 'ts').subscribe(
      (content: string) => this.ts = content
    );

    if (!this.example.css)
      this.css = '\```css\n/* No CSS */\n```';
    else {
      this.docs.getFileContent(this.example.id, 'css').subscribe(
        (content: string) => this.css = content
      );
    }
  }
}

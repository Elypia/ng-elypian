import {ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DocItem, DocService} from '../../services/doc.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-component-overview',
  templateUrl: './component-overview.component.html',
  styleUrls: ['./component-overview.component.css']
})
export class ComponentOverviewComponent implements OnInit {

  @ViewChild('example', {read: ViewContainerRef}) private example;
  public doc: DocItem;

  constructor(
    private cd: ChangeDetectorRef,
    private resolver: ComponentFactoryResolver,
    private route: ActivatedRoute,
    public docs: DocService
  ) { }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.doc = this.docs.getItem(params.get('id'));
      this.cd.detectChanges();

      this.example.clear();

      for (const ex of this.doc.examples)
        this.example.createComponent(this.resolver.resolveComponentFactory(ex));
    });
  }
}

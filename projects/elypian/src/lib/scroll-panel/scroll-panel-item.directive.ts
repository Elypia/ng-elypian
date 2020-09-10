import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[elyScrollPanelItem]'
})
export class ScrollPanelItemDirective {

  public constructor(public templateRef?: TemplateRef<unknown>) { }
}

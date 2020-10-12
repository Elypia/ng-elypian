import {AfterViewInit, Component, ContentChildren, ElementRef, QueryList, ViewChild} from '@angular/core';
import {ScrollPanelItemDirective} from './scroll-panel-item.directive';

@Component({
  selector: 'ely-scroll-panel',
  templateUrl: './scroll-panel.component.html',
  styleUrls: ['./scroll-panel.component.css']
})
export class ScrollPanelComponent implements AfterViewInit {

  @ContentChildren(ScrollPanelItemDirective) public carouselItems: QueryList<ScrollPanelItemDirective>;

  /** Collate all creates carousel elements into a list. */
  @ViewChild('item', { read: ElementRef }) private firstCarouselItem: ElementRef;

  public carouselWrapperStyle = {};

  ngAfterViewInit(): void {
    if (!this.carouselItems)
      return;

    const width: number = this.firstCarouselItem.nativeElement.getBoundingClientRect().width;
    this.carouselWrapperStyle = {
      width: `${width}px`
    };
  }
}

import {Component, Input} from '@angular/core';
import {TooltipPosition} from '@angular/material';

@Component({
  selector: 'ely-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.css']
})
export class TimestampComponent {

  /**
   * The primary date for this timestamp instance,
   * for component-overview the date the item was created.
   */
  @Input() date: Date = new Date();

  /**
   * The date this item was last updated.
   */
  @Input() updateDate: Date;

  /**
   * The format to display dates.
   */
  @Input() format: string = 'mediumDate';

  /**
   * Which direction to display the last updated date
   * as a tooltip.
   */
  @Input() updateTooltipPosition: TooltipPosition = 'below';
}

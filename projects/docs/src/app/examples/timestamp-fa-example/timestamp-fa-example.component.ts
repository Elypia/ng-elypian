import {Component} from '@angular/core';

@Component({
  selector: 'app-timestamp-fa-example',
  templateUrl: './timestamp-fa-example.component.html'
})
export class TimestampFaExampleComponent {
  public current: Date = new Date(1996, 0, 14);
  public modified: Date = new Date(1998, 0, 28);
}

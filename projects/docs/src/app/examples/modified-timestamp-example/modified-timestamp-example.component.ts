import {Component} from '@angular/core';

@Component({
  selector: 'app-modified-timestamp-example',
  templateUrl: './modified-timestamp-example.component.html',
  styleUrls: ['./modified-timestamp-example.component.css']
})
export class ModifiedTimestampExampleComponent {
  public current: Date = new Date(1996, 0, 14);
  public modified: Date = new Date(1998, 0, 28);
}

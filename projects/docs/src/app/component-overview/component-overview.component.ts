import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DocItem, DocService} from '../services/doc.service';

@Component({
  selector: 'app-component-overview',
  templateUrl: './component-overview.component.html',
  styleUrls: ['./component-overview.component.css']
})
export class ComponentOverviewComponent implements OnInit {

  public doc: DocItem;

  constructor(
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    public docs: DocService
  ) { }

  public ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.doc = this.docs.getItem(params.get('id'));
      this.cd.detectChanges();
    });
  }
}

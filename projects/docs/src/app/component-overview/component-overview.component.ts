import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
    private router: Router,
    public docs: DocService
  ) { }

  public ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const id: string = params.get('id');

      if (!id)
        this.router.navigate(['/']);

      this.doc = this.docs.getItem(id);
      this.cd.detectChanges();
      this.cd.markForCheck();
    });
  }
}

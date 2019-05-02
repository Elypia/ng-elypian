import {Component} from '@angular/core';

@Component({
  selector: 'ely-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  title: string;
  link?: string;
  tags: string[];
  createdDate: Date;
  modifiedDate?: Date;
}

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'blog-root',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  title = 'rex-blog';


  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en')
  }
}

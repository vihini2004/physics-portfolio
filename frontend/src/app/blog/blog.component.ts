import { Component, AfterViewInit } from '@angular/core';
declare var MathJax: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof MathJax !== 'undefined') {
      MathJax.typeset();
    }
  }
}

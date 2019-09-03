import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.scss']
})
export class NewscontentComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((data) => {
      console.log("普通路由值" + data.id);
    })
    this.route.params.subscribe((data) => {
      console.log("动态路由值" + data.id);
    })
  }

}

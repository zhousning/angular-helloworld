import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("header", { static: false }) header:any;

  public title:string = "home标题";
  public msg:string = "home msg";

  constructor() { }

  ngOnInit() {
  }

  run() {
    alert("我是福组件的方法");
  }
  
  getChildContent(){
    alert(this.header.content);
  }
}

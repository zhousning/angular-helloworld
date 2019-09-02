import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  title = "这是一个新闻组件"

  public msg:any;

  public content="<h1>html标签</h1>";

  public userinfo:any = {
    name: "zn",
    age: 20,
    sex: "1",
    cityList: ["北京", "上海", "南京"],
    city: "北京",
    hobby: [{
      title: '吃饭',
      checked: true 
    },
    {
      title: '睡觉',
      checked: false
    }]
  }

  arr:Array<number> = [1, 2, 3];
  arr1:any = [1, 2, 3];
  arr2 = [1, 2, "3"];

  score:number = 2;

  attr:string = "red";

  flag:boolean = false;

  today = new Date();
  constructor() {
    this.msg = "msg"
  }

  getData() {
    alert(this.msg);
  }

  setData() {
    this.msg = "按钮设置msg"
    }
  
  runEvent(e) {
  //ionic中必须指定类型不然会报错
    let dom:any = e.target;
    dom.style.color = "red";
  }

  keyUpFn(e) {
    console.log(e.keyCode);
    console.log(e.target.value);
    console.log(this.userinfo.name);
    console.log(this.userinfo.sex);
    console.log(this.userinfo.city);
  }

  ngOnInit() {
    this.userinfo.sex = "2"
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title:any;
  @Input() msg:any;
  @Input() run:any;
  @Input() home:any;

  public content:string = "子组件header content";

  constructor() { }

  ngOnInit() {
  }
  
  getParentMsg() {
  //alert(this.msg);
    alert(this.home.msg);
  }

  getParentRun() {
    this.run();
  }
}

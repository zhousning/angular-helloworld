import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  public keyword:string;
  public todolist:any[] = [];

  constructor() { }

  ngOnInit() {
  }

  run() {
    console.log("call fack child");
  }

  doAdd(e) {
    if (e.keyCode == 13) {
      if (!this.todolistHasKey(this.todolist, this.keyword)) {
        this.todolist.push({
          title: this.keyword,
          status: 0 
        })
        this.keyword = "";
      }
    }
  }

  doDelete(key) {
    this.todolist.splice(key, 1);
    this.keyword = "";
  }

  todolistHasKey(todolist:any, keyword:any) {
    //forEach是异步
    /*todolist.forEach(value => {
      if (value.title == keyword) {
        return true;
      }
      }); */
    if (!keyword) { return true }
    for (var i=0; i<todolist.length; i++) {
      if (todolist[i].title == keyword) {
        return true;
      }
    }
    return false;
  }
}

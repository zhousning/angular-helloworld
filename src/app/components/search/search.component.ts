import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {HttpserviceService} from '../../services/httpservice.service';
import { map, filter } from 'rxjs/operators';

/*
var storageService = new StorageService();
console.log(storageService.get());
*/

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent implements OnInit {

  public keyword:string;
  public history:any[] = [];

  @ViewChild("mydiv", { static: false }) mydiv:ElementRef;
  @ViewChild('todolist', { static: false }) todolist:any;

  constructor(public storageService:StorageService, public httpservice:HttpserviceService) {
  }

  doSearch() {
    if (this.history.indexOf(this.keyword) == -1) {
      this.history.push(this.keyword)
      this.storageService.set("searchlist", this.history);
    }
  }

  doDelete(key) {
    this.history.splice(key, 1);
    this.storageService.set("searchlist", this.history);
  }


  ngOnInit() {
    //带指令的html标签,这里面是组件和指令初始化完成,并不是dom节点初始化完成,针对带指令的html标签通过getbyid等普通的js方法在这里是获取不到的
    var searchlist:any = this.storageService.get("searchlist");
    if (searchlist) {
      this.history = searchlist;
    }
    
    var stream = this.storageService.getRxjsData();
    stream.subscribe(value => console.log(value));
    /*取消订阅
    var d = stream.subscribe(value => console.log(value));
    setTimeout(() => {
      d.unsubscribe();
      }, 1000);*/

    //多次订阅
    /*var intervalStream = this.storageService.getIntervalRxjsData();
    intervalStream.pipe(
      filter((value:any) => {
        if (value%2==0) {
          return true;
        }
      }),
      map((value:any) => {
        return value*value; 
      })
    ).
    subscribe(value => console.log(value));
    */

    //this.httpservice.getData();
    //this.httpservice.getJsonpData();

    let api = 'http://a.itying.com/api/productlist';
    this.httpservice.axiosGet(api).subscribe(value => console.log(value));
  }

  ngAfterViewInit(): void {
   //在这里面获取就可以
   console.log(this.mydiv);
   this.mydiv.nativeElement.style.background="red"
   this.todolist.run();
  }

}

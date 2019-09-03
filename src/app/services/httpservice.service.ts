import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(public http:HttpClient) { }

  getData() {
    let api = 'http://a.itying.com/api/productlist';
    this.http.get(api).subscribe((response) => {
      console.log(response); 
    });
  }

  postData() {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    let api = 'http://xxxxxx';
    this.http.post(api, {username:'张三', age:'20'}, httpOptions).subscribe((response) => {
      console.log(response); 
    });
  }

  getJsonpData() {
    //jsonp请求解决跨域问题 服务器必须得支持jsonp
    //比如访问'http://a.itying.com/api/productlist?callback=xxx或cb=xxx',能够连同请求的xxx函数一块返回就是支持的;
    let api = 'http://a.itying.com/api/productlist';
    this.http.jsonp(api, 'callback').subscribe((response) => {
      //以上请求的地址是http://a.itying.com/api/productlist?callback=ng_jsonp_callback_0
      console.log(response); 
    });
  }

  //this.httpservice.axiosGet(api).subscribe(value => console.log(value));
  axiosGet(api) {
    return new Observable(observer => {
      axios.get(api, {
          params: {
            ID: 12345
          }
        })
        .then(function (response) {
          observer.next(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
        });  
    });
  }
}

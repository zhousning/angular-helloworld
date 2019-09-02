import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get(key:string) {
    return JSON.parse(localStorage.getItem(key));
  }

  set(key:string, value:any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key:string) {
    localStorage.removeItem(key);
  }

  getData() {
    alert("获取服务数据");
  }

  getRxjsData() {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next("rxjs data");
        //observer.error('observable timeout');
      }, 2000);
    });
  }

  getIntervalRxjsData() {
    let count = 0;
    return new Observable(observer => {
      setInterval(() => {
        count++;
        observer.next(count);
        //observer.error('observable timeout');
      }, 1000);
    });
  }
}

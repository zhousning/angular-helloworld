//浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
//根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';

//引入自定义模块
import { UserModule } from './module/user/user.module';
import { ProductModule } from './module/product/product.module';

import {StorageService} from './services/storage.service';

//@NgModule装饰器,接受一个元素据对象,告诉angular如何编译和启动应用
@NgModule({
//配置当前项目运行的组件
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    SearchComponent,
    ToDoListComponent,
    HeaderComponent,
    FooterComponent,
    NewscontentComponent
    ],
    //配置当前模块运行依赖的其他模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    UserModule,
    ProductModule
    ],
    //配置项目所需要的服务
    providers: [StorageService],
    //指定应用的主视图(根组件) 通过引导根AppModule来启动应用,这里一般写的是根组件
  bootstrap: [AppComponent]
  })

  //根模块不需要导出任何东西,因为其他组件不需要导入根模块
export class AppModule { }

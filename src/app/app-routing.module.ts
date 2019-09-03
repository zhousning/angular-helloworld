import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NewsComponent } from './components/news/news.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'user', loadChildren: './module/user/user.module#UserModule' },
  {path: 'news', component: NewsComponent ,
    children: [
    {path: 'newscontent/:id', component: NewscontentComponent },
    {path: 'newscontent', component: NewscontentComponent },
    {path: '**', redirectTo: '/home'}
    ]
  },
  /*
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
    } */
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

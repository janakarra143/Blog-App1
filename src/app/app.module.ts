import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListBlogsComponent } from './components/list-blogs/list-blogs.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';


const routes: Routes = [
  {path: 'blogs', component: ListBlogsComponent},
  {path: 'blogs/:id', component: BlogComponent},
  {path: 'create', component: CreateBlogComponent},
  {path: 'edit/:id', component: EditBlogComponent},
  {path: '', redirectTo: '/blogs', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    ListBlogsComponent,
    PagenotfoundComponent,
    CreateBlogComponent,
    NavbarComponent,
    BlogComponent,
    EditBlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

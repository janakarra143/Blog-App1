import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogsService } from 'src/app/services/blogs.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.css']
})
export class ListBlogsComponent implements OnInit {

  public blogs: any = []
  currentBlog?: Blog;
  currentIndex = -1;

  constructor(private _blogsService: BlogsService, private router: Router) { }

  ngOnInit(): void {
    this.retreiveBlogs();
  }

  retreiveBlogs(){
    this._blogsService.getBlogs().subscribe(data =>{
      this.blogs = data;
    },
    error =>{
      console.log(error)
    });
  }

  refreshList(): void {
    this.retreiveBlogs();
    this.currentBlog = undefined;
    this.currentIndex = -1;
  }
  


}

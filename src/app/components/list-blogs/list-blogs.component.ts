import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogsService } from 'src/app/services/blogs.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.css']
})
export class ListBlogsComponent implements OnInit {

  public blogs: any = []
  firstBlog = new Blog();



  constructor(private _blogsService: BlogsService, private router: Router) { }

  ngOnInit(): void {
    this.retreiveBlogs();


  }

  retreiveBlogs(){
    this._blogsService.getBlogs().subscribe(data =>{
      this.blogs = data;
      this.firstBlog = this.blogs[0]
    
      
      this.blogs.shift();
      console.log(this.firstBlog._id)
    },
    error =>{
      console.log(error)
    });
  }






}

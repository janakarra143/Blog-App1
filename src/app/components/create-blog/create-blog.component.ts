import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  public blog: Blog = new Blog();
  constructor(private _blogService: BlogsService, private _router: Router) { }

  ngOnInit(): void {
  }

  saveBlog() {
    console.log(this.blog);
    this._blogService.saveBlog(this.blog).subscribe(blog =>{
      if (blog) {
        this._router.navigateByUrl('/blogs')
      }
    })
  }

}

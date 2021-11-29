import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  public blog: Blog = new Blog();
  constructor(private _blogService: BlogsService, private _router: Router) { }

  ngOnInit(): void {
  }

  editBlog() {
    console.log(this.blog);
    this._blogService.saveBlog(this.blog).subscribe(blog =>{
      if (blog) {
        this._router.navigateByUrl('/blogs')
      }
    })
  }

}

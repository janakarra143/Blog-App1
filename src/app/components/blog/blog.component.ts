import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs.service';
import { Blog } from 'src/app/models/blog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog: any;

  constructor(private route: ActivatedRoute, private _blogsService: BlogsService, private _router: Router) {}
  ngOnInit() {
    this.getBlog(this.route.snapshot.params.id)

  }

  getBlog(id: string) {
    this._blogsService.getBlogbyBlogId(id).subscribe(data => {

      this.blog = data;
      console.log(data)
      console.log(this.blog.title)
    })
  }



  deleteBlog(id: any){
    this._blogsService.deleteBlog(id).subscribe(() =>{
        this._router.navigateByUrl('/blogs')
  });
}



}




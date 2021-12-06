import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  id: any;
  blog: any;
  submitted = false;
  constructor(private _blogService: BlogsService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => this.id = params.get('id')
    )
    this.getBlog(this.id)
  }

  getBlog(id: string) {
    this._blogService.getBlogbyBlogId(id).subscribe(data => {

      this.blog = data;
      console.log(data)
      console.log(this.blog.title)
    })
  }

  handleSubmit(f:NgForm){
    this._blogService.updateBlog(this.id, f.value)
    .subscribe(
      data => {
        this.submitted = true;
        this._router.navigateByUrl('/blogs/'+ this.id);

      }
    )
  }

}

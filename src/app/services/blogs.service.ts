import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private baseUrl: string = "http://localhost:3000/blogs";
  selectedBlog?: Blog;
  constructor(private _httpClient: HttpClient) {}

  getBlogs() {
    return this._httpClient.get(this.baseUrl) ;
  }

  saveBlog(blog: Blog) {
    return this._httpClient.post(this.baseUrl, blog);
  }

  getBlogbyBlogId(id: string) {
    return this._httpClient.get(`${this.baseUrl}/${id}`)
  }

  updateBlog(id: any, blog: Blog){
    
      return this._httpClient.put(`${this.baseUrl}/${id}`, blog);
    
  }
  deleteBlog(id:any) {
    return this._httpClient.delete(`${this.baseUrl}/${id}`)
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { BlogService } from '../service/blog.service'
import { Blog } from '../model/blog'

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;
  preBlog: Blog; //上一条记录
  nextBlog: Blog;//下一条记录

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router, ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { blog: Blog, preBlog: Blog, nextBlog: Blog }) => {
        this.blog = data.blog;
        if (data.nextBlog.id) {
          this.nextBlog = data.nextBlog;
        } else {
          this.nextBlog = new Blog();
        }
        this.preBlog = data.preBlog;
      });
  }
}

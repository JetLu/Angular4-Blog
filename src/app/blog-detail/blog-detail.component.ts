import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogService } from '../service/blog.service'
import { Blog } from '../model/blog'

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router, ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { blog: Blog }) => {
        this.blog = data.blog;
      });
  }

}

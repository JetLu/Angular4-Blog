import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogService } from '../service/blog.service'
import { Blog } from '../model/blog'

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogArr: Blog[];

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router, ) { }
  ngOnInit() {
    this.route.data
      .subscribe((data: { blogList: Blog[] }) => {
        this.blogArr = data.blogList;
      });
  }

}

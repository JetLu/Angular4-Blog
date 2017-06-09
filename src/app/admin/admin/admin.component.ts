
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { BlogService } from '../../service/blog.service'
import { Blog } from '../../model/blog'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  blogArr: Blog[];

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router, ) { }
  ngOnInit() {
    this.route.data
      .subscribe((data: { blogList: Blog[] }) => {
        this.blogArr = data.blogList;
      });
  }

  onParentEvent() {
    this.getBlogList();
  }

  getBlogList(): void {
    this.blogService.getBlogs().then(result => {
      this.blogArr = result;
    })
  }
}

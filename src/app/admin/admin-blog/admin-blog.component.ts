
import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Blog } from '../../model/blog'
import { NgForm } from '@angular/forms';
import { BlogService } from '../../service/blog.service'

@Component({
  selector: 'admin-form-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {
  @ViewChild('childModal') public childModal: ModalDirective;
  blogModel: Blog = new Blog();

  @Output() onParentEvent = new EventEmitter();

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
  }

  // 添加blog信息
  addOrUpdateBlog(blog: Blog) {
    //修改记录
    if (blog.id) {
      this.blogService.update(blog).then(result => {
        this.hideBlogFormModal();
        this.onParentEvent.emit();
      });
    } else {
      // 创建记录
      let commentObj = {
        id: (new Date()).valueOf(),
        title: blog.title,
        content: blog.content,
        createdTime: new Date(),
        author: 'admin',
        viewCount: 1
      }

      this.blogService.create(JSON.stringify(commentObj)).then(result => {
        this.hideBlogFormModal();
        this.onParentEvent.emit();
      });
    }
  }

  // modal显示
  public adminForm(id: Number): void {
    //如果是
    if (id) {
      debugger
      this.blogService.getBlog(id).then(result => {
        this.blogModel = result;
      })
    }
    else {
      this.blogModel = new Blog();
    }
    this.childModal.show();
  }

  // 隐藏modal
  public hideBlogFormModal(): void {
    this.childModal.hide();
  }
}

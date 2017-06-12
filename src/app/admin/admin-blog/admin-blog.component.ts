
import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Blog } from '../../model/blog'
import { NgForm } from '@angular/forms';
import { BlogService } from '../../service/blog.service'

@Component({
  selector: 'app-admin-blog',
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

  add(theForm: NgForm) {
    let blog = theForm.value;
    let commentObj = {
      id: (new Date()).valueOf(),
      title: blog.title,
      content: blog.content,
      createdTime: new Date(),
      author: 'admin',
      viewCount: 1
    }

    this.blogService.create(JSON.stringify(commentObj)).then(result => {
      this.hideChildModal();
      this.onParentEvent.emit();
    });
  }

  public showChildModal(blog: Blog): void {
    this.blogModel = blog;
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }
}

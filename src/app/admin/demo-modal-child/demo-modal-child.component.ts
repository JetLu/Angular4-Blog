import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Blog } from '../../model/blog'
import { NgForm } from '@angular/forms';
import { BlogService } from '../../service/blog.service'

@Component({
  selector: 'demo-modal-child',
  templateUrl: './demo-modal-child.component.html',
  styleUrls: ['./demo-modal-child.component.css']
})
export class DemoModalChildComponent implements OnInit {
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

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }
}

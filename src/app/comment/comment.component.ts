import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

import { Comment } from '../model/comment'
import { CommentService } from '../service/comment.service'


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentArr: Comment[];
  postId: number;

  constructor(private commentService: CommentService, private route: ActivatedRoute, private router: Router, ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.postId = + params['id']
    });

    this.route.data
      .subscribe((data: { commentList: Comment[] }) => {
        this.commentArr = data.commentList;
      });
  }

  add(theForm: NgForm) {
    let comments = theForm.value;
    let commentObj = {
      postId: this.postId,
      content: comments.content,
      createdTime: new Date(),
      reviewer: comments.nickName
    }

    this.commentService.create(JSON.stringify(commentObj)).then(hero => {
      this.getCommentList()
    });
  }

  getCommentList(): void {
    this.commentService.getCommentByBlogId(this.postId).then(result => {
      this.commentArr = result;
    })
  }
}

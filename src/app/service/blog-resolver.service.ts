import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Blog } from '../model/blog'
import { Comment } from '../model/comment'

import { BlogService } from './blog.service'
import { CommentService } from './comment.service'

@Injectable()
export class BlogResolverService implements Resolve<Blog> {
  constructor(private blogService: BlogService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Blog> {
    return this.blogService.getBlogs().then(result => {
      if (result) {
        return result;
      } else {
        this.router.navigate(['/blog']);
        return null;
      }
    })
  }
}

@Injectable()
export class BlogDetailResolverService implements Resolve<Blog> {
  constructor(private blogService: BlogService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Blog> {
    let blogId = route.params["id"]

    return this.blogService.getBlog(+blogId).then(result => {
      if (result) {
        return result;
      } else {
        this.router.navigate(['/blog']);
        return null;
      }
    })
  }
}

@Injectable()
export class BlogCommentResolverService implements Resolve<Comment> {
  constructor(private commentService: CommentService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Comment> {
    let postId = route.params["id"]
    return this.commentService.getCommentByBlogId(+postId).then(result => {
      if (result) {
        return result;
      } else {
        return null;
      }
    })
  }
}

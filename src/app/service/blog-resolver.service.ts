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

// 获取上一条记录
@Injectable()
export class PreBlogResolverService implements Resolve<Blog> {

  preBlog: Blog; //上一条记录
  constructor(private blogService: BlogService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Blog> {
    let blogId = route.params["id"]

    return this.blogService.getBlogs().then(result => {
      let preBlogArr = result.filter(x => x.id > blogId);
      if (preBlogArr.length > 0) {
        this.preBlog = preBlogArr[0];
      }
      else {
        this.preBlog = new Blog();
      }
      return this.preBlog;
    })
  }
}


// 获取下一条记录
@Injectable()
export class NextBlogResolverService implements Resolve<Blog> {
  nextBlog: Blog = new Blog();//下一条记录
  constructor(private blogService: BlogService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Blog> {
    let blogId = route.params["id"]
    return this.blogService.getBlogs().then(result => {
      let nextblogArr = result.filter(x => x.id < blogId);
      if (nextblogArr.length > 0) {

        return nextblogArr[nextblogArr.length - 1];
      }
      else {
        return new Blog();
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

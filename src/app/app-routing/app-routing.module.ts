import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsModule } from '../blogs/blogs.module';
import { BlogDetailModule } from '../blog-detail/blog-detail.module';

import { AdminModule } from '../admin/admin/admin.module'

import { BlogResolverService, BlogDetailResolverService, BlogCommentResolverService } from '../service/blog-resolver.service';

// 获取blogmodule
export function loadBlogsModule() { return BlogsModule; }
// 获取blogDetailModule
export function loadBlogDetailModule() { return BlogDetailModule; }

// 获取adminModule
export function loadAdminModule() { return AdminModule; }


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: loadAdminModule,
      resolve: {
        blogList: BlogResolverService
      }
  },
  {
    path: 'home',
    loadChildren: loadBlogsModule,
    resolve: {
      blogList: BlogResolverService
    }
  },
  {
    path: 'blog',
    loadChildren: loadBlogsModule,
    resolve: {
      blogList: BlogResolverService
    }
  },
  {
    path: 'about',
    loadChildren: '../about/about.module#AboutModule'
  },
  {
    path: 'details/:id',
    loadChildren: loadBlogDetailModule,
    resolve: {
      blog: BlogDetailResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [BlogResolverService, BlogDetailResolverService, BlogCommentResolverService]
})
export class AppRoutingModule { }


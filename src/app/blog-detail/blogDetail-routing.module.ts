import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogDetailComponent } from './blog-detail.component';
import { CommentComponent } from '../comment/comment.component'
import { BlogCommentResolverService } from '../service/blog-resolver.service';

const routes: Routes = [
  {
    path: '', component: BlogDetailComponent,
    children: [
      {
        path: '',
        component: CommentComponent,
        resolve: {
          commentList: BlogCommentResolverService
        }
        /*children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis: CrisisDetailResolver
            }
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]*/
      }
    ]
  },
];
export const blogDetailRoutingModule = RouterModule.forChild(routes);

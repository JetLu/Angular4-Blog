import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { blogDetailRoutingModule } from './blogDetail-routing.module'
import { BlogDetailComponent } from './blog-detail.component'
import { CommentComponent } from '../comment/comment.component'

@NgModule({
  imports: [
    CommonModule,
    blogDetailRoutingModule,
    FormsModule
  ],
  declarations: [BlogDetailComponent, CommentComponent]
})
export class BlogDetailModule { }

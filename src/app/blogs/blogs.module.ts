import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {blogsRouting} from './blog-routing.module'
import {BlogsComponent} from './blogs.component'

@NgModule({
  imports: [
    CommonModule,
    blogsRouting
  ],
  declarations: [BlogsComponent]
})
export class BlogsModule { }

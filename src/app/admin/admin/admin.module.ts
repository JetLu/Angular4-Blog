import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { adminRouting } from './admin-routing.module'
import { AdminComponent } from './admin.component'
import { AdminBlogComponent } from '../admin-blog/admin-blog.component';

@NgModule({
  imports: [
    CommonModule,
    adminRouting,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [AdminComponent, AdminBlogComponent]
})
export class AdminModule { }

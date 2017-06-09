import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { adminRouting } from './admin-routing.module'
import { AdminComponent } from './admin.component'
import { ModalModule } from 'ngx-bootstrap/modal';


import { DemoModalChildComponent } from '../demo-modal-child/demo-modal-child.component';


import { StaticModalComponent } from '../static-modal/static-modal.component';



@NgModule({
  imports: [
    CommonModule,
    adminRouting,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [AdminComponent, DemoModalChildComponent,StaticModalComponent]
})
export class AdminModule { }

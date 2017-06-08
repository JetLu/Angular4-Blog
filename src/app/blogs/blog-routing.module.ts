import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs.component';

const routes: Routes = [
  { path: '', component: BlogsComponent },
];

export const blogsRouting = RouterModule.forChild(routes);
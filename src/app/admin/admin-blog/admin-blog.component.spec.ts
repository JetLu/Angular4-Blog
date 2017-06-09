import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogComponent } from './admin-blog.component';

describe('AdminBlogComponent', () => {
  let component: AdminBlogComponent;
  let fixture: ComponentFixture<AdminBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

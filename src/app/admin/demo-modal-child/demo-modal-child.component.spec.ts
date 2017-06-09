import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoModalChildComponent } from './demo-modal-child.component';

describe('DemoModalChildComponent', () => {
  let component: DemoModalChildComponent;
  let fixture: ComponentFixture<DemoModalChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoModalChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoModalChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

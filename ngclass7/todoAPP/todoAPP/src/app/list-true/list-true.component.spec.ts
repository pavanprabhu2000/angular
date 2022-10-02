import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrueComponent } from './list-true.component';

describe('ListTrueComponent', () => {
  let component: ListTrueComponent;
  let fixture: ComponentFixture<ListTrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

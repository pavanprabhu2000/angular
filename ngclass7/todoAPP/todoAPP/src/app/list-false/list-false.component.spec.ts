import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFalseComponent } from './list-false.component';

describe('ListFalseComponent', () => {
  let component: ListFalseComponent;
  let fixture: ComponentFixture<ListFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFalseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

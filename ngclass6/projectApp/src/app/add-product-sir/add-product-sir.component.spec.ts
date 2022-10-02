import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductSirComponent } from './add-product-sir.component';

describe('AddProductSirComponent', () => {
  let component: AddProductSirComponent;
  let fixture: ComponentFixture<AddProductSirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductSirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductSirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

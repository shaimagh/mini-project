import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuationshoppingComponent } from './continuationshopping.component';

describe('ContinuationshoppingComponent', () => {
  let component: ContinuationshoppingComponent;
  let fixture: ComponentFixture<ContinuationshoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinuationshoppingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuationshoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

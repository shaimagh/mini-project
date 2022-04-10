import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirAdressComponent } from './confir-adress.component';

describe('ConfirAdressComponent', () => {
  let component: ConfirAdressComponent;
  let fixture: ComponentFixture<ConfirAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirAdressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

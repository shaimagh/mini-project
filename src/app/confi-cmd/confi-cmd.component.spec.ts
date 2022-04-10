import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiCmdComponent } from './confi-cmd.component';

describe('ConfiCmdComponent', () => {
  let component: ConfiCmdComponent;
  let fixture: ComponentFixture<ConfiCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiCmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

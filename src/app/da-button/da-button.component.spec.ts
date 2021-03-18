import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaButtonComponent } from './da-button.component';

describe('DaButtonComponent', () => {
  let component: DaButtonComponent;
  let fixture: ComponentFixture<DaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

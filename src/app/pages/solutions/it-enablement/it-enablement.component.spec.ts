import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItEnablementComponent } from './it-enablement.component';

describe('ItEnablementComponent', () => {
  let component: ItEnablementComponent;
  let fixture: ComponentFixture<ItEnablementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItEnablementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItEnablementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobokindComponent } from './robokind.component';

describe('RobokindComponent', () => {
  let component: RobokindComponent;
  let fixture: ComponentFixture<RobokindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobokindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobokindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

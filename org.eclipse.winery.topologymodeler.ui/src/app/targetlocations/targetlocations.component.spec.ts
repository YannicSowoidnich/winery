import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetlocationsComponent } from './targetlocations.component';

describe('TargetlocationsComponent', () => {
  let component: TargetlocationsComponent;
  let fixture: ComponentFixture<TargetlocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetlocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetlocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

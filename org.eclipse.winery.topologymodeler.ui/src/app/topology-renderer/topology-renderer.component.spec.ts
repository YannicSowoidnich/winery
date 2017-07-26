import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopologyRendererComponent } from './topology-renderer.component';

describe('TopologyRendererComponent', () => {
  let component: TopologyRendererComponent;
  let fixture: ComponentFixture<TopologyRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopologyRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopologyRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

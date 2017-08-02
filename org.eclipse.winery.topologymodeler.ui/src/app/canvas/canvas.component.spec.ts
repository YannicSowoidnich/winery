import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasComponent } from './canvas.component';
import { NodeComponent } from '../node/node.component';
import { AccordionModule } from 'ngx-bootstrap';
import { JsPlumbService } from '../jsPlumbService';
import { JsonService } from '../jsonService/json.service';

describe('CanvasComponent', () => {
  let component: CanvasComponent;
  let fixture: ComponentFixture<CanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasComponent,
        NodeComponent],
      imports: [AccordionModule.forRoot()],
      providers: [JsPlumbService, JsonService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if array contains node with the given id', () => {
    const trueResult = component.arrayContainsNode(['banana', 'apple', 'kiwi'], 'apple');
    expect(trueResult).toBe(true);
  });
});

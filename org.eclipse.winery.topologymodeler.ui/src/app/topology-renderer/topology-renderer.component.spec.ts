import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopologyRendererComponent } from './topology-renderer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CanvasComponent } from '../canvas/canvas.component';
import { NodeComponent } from '../node/node.component';
import { AccordionModule } from 'ngx-bootstrap';
import { WineryAlertModule } from '../winery-alert/winery-alert.module';
import { ToastModule } from 'ng2-toastr';
import { JsonService } from '../jsonService/json.service';
import { JsPlumbService } from '../jsPlumbService';

describe('TopologyRendererComponent', () => {
  let component: TopologyRendererComponent;
  let fixture: ComponentFixture<TopologyRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopologyRendererComponent, NavbarComponent, CanvasComponent, NodeComponent],
      imports: [AccordionModule.forRoot(), WineryAlertModule.forRoot(), ToastModule.forRoot()],
      providers: [JsonService, JsPlumbService]
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

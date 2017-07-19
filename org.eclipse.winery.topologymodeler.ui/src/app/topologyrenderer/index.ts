import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'app/app.component';
import { CanvasComponent } from '../canvas/canvas.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NodeComponent } from '../node/node.component';
import { JsonService } from '../jsonService/json.service';
import { JsPlumbService } from '../jsPlumbService';
import { WineryCustomOption } from '../winery-alert/winery-alert-options';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { LayoutDirective } from '../layout.directive';
import { RelationshipComponent } from '../relationship/relationship.component';
import { WineryAlertModule } from '../winery-alert/winery-alert.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedNodeNavbarService } from '../shared-node-navbar.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ToastModule.forRoot(),
    AccordionModule.forRoot(),
    WineryAlertModule.forRoot()
  ],
  declarations: [
    CanvasComponent,
    AppComponent,
    NavbarComponent,
    NodeComponent,
    LayoutDirective,
    RelationshipComponent
  ],
  providers: [],
  exports: [
    AppComponent
  ]
})
export class TopologyrendererModule {
  static forRoot() {
    return {
      ngModule: TopologyrendererModule,
      providers: [
        JsonService,
        JsPlumbService,
        SharedNodeNavbarService,
        {provide: ToastOptions, useClass: WineryCustomOption},
      ],
    };
  }
}

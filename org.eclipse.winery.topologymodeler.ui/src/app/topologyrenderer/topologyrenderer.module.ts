import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'app/app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PaletteComponent } from '../palette/palette.component';
import { NodeComponent } from '../node/node.component';
import { CanvasComponent } from '../canvas/canvas.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { LayoutDirective } from '../layout.directive';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule, BsDropdownModule } from 'ngx-bootstrap';
import { WineryAlertModule } from '../winery-alert/winery-alert.module';
import { ToastModule } from 'ng2-toastr';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    WineryAlertModule.forRoot(),
    ToastModule.forRoot(),
    AccordionModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    PaletteComponent,
    NodeComponent,
    CanvasComponent,
    SidebarComponent,
    LayoutDirective,
  ]
})
export class TopologyrendererModule { }

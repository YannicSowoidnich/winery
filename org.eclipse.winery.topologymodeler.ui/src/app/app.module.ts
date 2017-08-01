import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { JsPlumbService } from './jsPlumbService';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WineryAlertModule } from './winery-alert/winery-alert.module';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { WineryCustomOption } from './winery-alert/winery-alert-options';
import { NodeComponent } from './node/node.component';
import { PaletteComponent } from './palette/palette.component';
import { CanvasComponent } from './canvas/canvas.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutDirective } from './layout.directive';
import {JsonService} from './jsonService/json.service';
import { TopologyRendererComponent } from './topology-renderer/topology-renderer.component';
import { TopologyRendererModule } from './topology-renderer/topology-renderer.module';
import { PropertiesComponent } from './properties/properties.component';
import { DeploymentArtifactsComponent } from './deployment-artifacts/deployment-artifacts.component';
import { RequirementsCapabilitiesComponent } from './requirements-capabilities/requirements-capabilities.component';
import { PoliciesComponent } from './policies/policies.component';
import { PrintViewComponent } from './print-view/print-view.component';
import { TargetLocationsComponent } from './target-locations/target-locations.component';

@NgModule({
  declarations: [
    AppComponent,
    PaletteComponent,
    AppComponent,
    PaletteComponent,
    SidebarComponent,
    PropertiesComponent,
    DeploymentArtifactsComponent,
    RequirementsCapabilitiesComponent,
    PoliciesComponent,
    PrintViewComponent,
    TargetLocationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    WineryAlertModule.forRoot(),
    ToastModule.forRoot(),
    AccordionModule.forRoot(),
    TopologyRendererModule.forRoot()
  ],
  providers: [
    {provide: ToastOptions, useClass: WineryCustomOption},
    JsPlumbService,
    JsonService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}

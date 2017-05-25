import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WineryAlertModule } from './winery-alert/winery-alert.module';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { WineryCustomOption } from './winery-alert/winery-alert-options';
import { NodeComponent } from './node/node.component';
import { PaletteComponent } from './palette/palette.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaletteComponent,
    NodeComponent,
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
  ],
  providers: [
    {provide: ToastOptions, useClass: WineryCustomOption},
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}

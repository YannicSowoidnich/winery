import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlertsComponent } from "./alerts/alerts.component";
import { AlertModule } from "ngx-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    AlertModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}

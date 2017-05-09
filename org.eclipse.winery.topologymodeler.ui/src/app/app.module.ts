import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {JsPlumbService} from './services/jsplumb.service';
import { BroadcastService } from './services/broadcast.service';
import { ModelService } from './services/model.service';

import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [JsPlumbService,
              BroadcastService,
              ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }

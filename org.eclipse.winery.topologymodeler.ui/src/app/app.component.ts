import { Component, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';
import { WineryAlertService } from './winery-alert/winery-alert.service';

declare var jsPlumb:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('test') testEl;
  ngAfterViewInit() {
    let me = this;
    jsPlumb.ready(function () {
      jsPlumb.addEndpoint(me.testEl.nativeElement);
    });
  }

  constructor(vcr: ViewContainerRef, private notify: WineryAlertService) {
    this.notify.init(vcr);
  }

}

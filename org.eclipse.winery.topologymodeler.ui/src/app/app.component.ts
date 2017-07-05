import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { WineryAlertService } from './winery-alert/winery-alert.service';
import { TTopologyTemplate, Visuals } from './ttopology-template';
import { JsonService } from './jsonService/json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() topologyTemplate: TTopologyTemplate;
  @Input() visuals: Visuals[];

  constructor(vcr: ViewContainerRef, private notify: WineryAlertService, private jsonService: JsonService) {
    this.notify.init(vcr);
  }

  ngOnInit() {
    this.jsonService.setData(this.visuals, this.topologyTemplate);
  }

}

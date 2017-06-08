import {AfterViewInit, Component, OnInit} from '@angular/core';
import { JsPlumbService } from '../jsPlumbService';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  isActive = false;
  titleOfClickedItem = [];
  numberOfApacheInstances = 1;
  numberOfBabelInstances = 1;
  numberOfDashboardInstances = 1;

  constructor(private jsPlumbService: JsPlumbService) {
  }

  ngOnInit() {
  }

  generateIDOfNode($event: any): void {
    if ($event === 'Apache-2.4') {
      if (this.numberOfApacheInstances === 1) {
        const title = $event;
        this.titleOfClickedItem.push(title);
      } else {
        const title = $event;
        const instanceNumber = this.numberOfApacheInstances.toString();
        const fullID = title.concat('_' + instanceNumber);
        this.titleOfClickedItem.push(fullID);
      }
      this.numberOfApacheInstances++;
    } else if ($event === 'Babel') {
      if (this.numberOfBabelInstances === 1) {
        const title = $event;
        this.titleOfClickedItem.push(title);
      } else {
        const title = $event;
        const instanceNumber = this.numberOfBabelInstances.toString();
        const fullID = title.concat('_' + instanceNumber);
        this.titleOfClickedItem.push(fullID);
      }
      this.numberOfBabelInstances++;
    } else if ($event === 'Dashboard') {
      if (this.numberOfDashboardInstances === 1) {
        const title = $event;
        this.titleOfClickedItem.push(title);
      } else {
        const title = $event;
        const instanceNumber = this.numberOfDashboardInstances.toString();
        const fullID = title.concat('_' + instanceNumber);
        this.titleOfClickedItem.push(fullID);
      }
      this.numberOfDashboardInstances++;
    }
  }

  appendTitleToArray($event) {
    this.generateIDOfNode($event);
    this.isActive = true;
    console.log(this.titleOfClickedItem);
  }
}

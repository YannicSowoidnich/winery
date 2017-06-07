import {AfterViewInit, Component, OnInit} from '@angular/core';
import { JsPlumbService } from '../jsPlumbService';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  isActive = false;
  idOfClickedItem = [];

  constructor(private jsPlumbService: JsPlumbService) {
  }

  ngOnInit() {
  }

  generateNode($event) {
    this.isActive = true;
    console.log($event);
    this.idOfClickedItem.push($event);
  }
}

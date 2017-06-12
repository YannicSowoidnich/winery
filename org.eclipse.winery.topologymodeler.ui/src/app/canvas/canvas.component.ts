import {AfterViewInit, Component, OnInit} from '@angular/core';
import {JsPlumbService} from '../jsPlumbService';
import {JsonService} from '../json.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit {
  isActive = false;
  titleOfClickedItem = [];
  addedNewNode = false;
  nodeTemplates = [];
  relationshipTemplates = [];
  newJsPlumbInstance: any;

  constructor(private jsPlumbService: JsPlumbService, private jsonService: JsonService) {
    this.newJsPlumbInstance = this.jsPlumbService.getJsPlumbInstance();
    this.nodeTemplates = this.jsonService.getNodes();
    this.relationshipTemplates = this.jsonService.getRelationships();
  }

  ngOnInit() {
  }

  generateIDOfNode($event: any): void {
    if (this.titleOfClickedItem.length > 0) {
      for (let i = this.titleOfClickedItem.length - 1; i >= 0; i--) {
        if ($event === this.titleOfClickedItem[i].title) {
          const numberOfNewInstance = this.titleOfClickedItem[i].numberOfInstance + 1;
          this.titleOfClickedItem.push({
            title: $event, numberOfInstance: numberOfNewInstance,
            id: $event.concat('_' + numberOfNewInstance.toString())
          });
          this.addedNewNode = true;
          break;
        }
        this.addedNewNode = false;
      }
      if (this.addedNewNode === false) {
        this.titleOfClickedItem.push({title: $event, numberOfInstance: 1, id: $event});
      }
    } else {
      this.titleOfClickedItem.push({title: $event, numberOfInstance: 1, id: $event});
    }
  }

  appendTitleToArray($event) {
    this.generateIDOfNode($event);
    this.isActive = true;
    console.log(this.titleOfClickedItem);
  }

  ngAfterViewInit(): void {
    this.newJsPlumbInstance.importDefaults({
      PaintStyle: {
        strokeWidth: 2,
        stroke: 'rgba(200,0,0,0.5)',
      }
      ,
      Connector: ['StateMachine'],
      Endpoints: [
        ['Blank', {radius: 0}], ['Blank', {radius: 0}]],
      EndpointStyles: [{fill: '#225588'}, {fill: '#225588'}],
      ConnectionsDetachable: false,
      Anchor: 'Continuous'
    });
    for (let i = 0; i < this.relationshipTemplates.length; i++) {
      const sourceElement = this.relationshipTemplates[i].sourceElement;
      const targetElement = this.relationshipTemplates[i].targetElement;
      this.newJsPlumbInstance.draggable(sourceElement);
      this.newJsPlumbInstance.draggable(targetElement);
      this.newJsPlumbInstance.connect({
        source: sourceElement,
        target: targetElement,
        overlays: [['Arrow', {width: 15, length: 15, location: 0, id: 'arrow', direction: -1}],
          ['Label', {
            label: 'hostedOn()',
            id: 'label',
            labelStyle: {font: 'bold 18px/30px Courier New, monospace'}
          }]
        ],
        connectorOverlays: []
      });
    }
  }
}

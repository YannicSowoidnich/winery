import { AfterContentInit, AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {JsPlumbService} from '../jsPlumbService';
import {JsonService} from '../jsonService/json.service';
import {SharedNodeNavbarService} from '../shared-node-navbar.service';
import { TNodeTemplate , TRelationshipTemplate} from '../ttopology-template';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit, AfterContentInit {
  paletteClicked = false;
  addedNewNode = false;
  nodeTemplates: any[] = [];
  nodeTypes: any[] = [];
  relationshipTemplates: any[] = [];
  newJsPlumbInstance: any;
  visuals: any[];
  width = 0;
  height = 0;

  constructor(private jsPlumbService: JsPlumbService, private jsonService: JsonService,
              private _sharedNodeNavbarService: SharedNodeNavbarService) {

  }

  ngAfterContentInit() {
  }

  repaintJsPlumb() {
    this.newJsPlumbInstance.repaintEverything();
  }

  ngOnInit() {

    this._sharedNodeNavbarService.paletteItem$.subscribe(
      (paletteItem) => {
        this.nodeFactory(paletteItem);
        this.paletteClicked = true;
      }
    );
    this._sharedNodeNavbarService.buttonStates$.subscribe(
      (buttonChangeObject) => {
        switch (buttonChangeObject.buttonID) {
          case 'layout': {
            this.layoutNodes(buttonChangeObject.state);
            break;
          }
        }
      });
    this.newJsPlumbInstance = this.jsPlumbService.getJsPlumbInstance();
    this.newJsPlumbInstance.setContainer('container');
    this.nodeTemplates = this.jsonService.getNodes();
    this.relationshipTemplates = this.jsonService.getRelationships();
    this.visuals = this.jsonService.getVisuals();
    this.assignVisuals();
  }

  assignVisuals() {
    for (const node of this.nodeTemplates) {
      for (const visual of this.visuals) {
        if (node.id === visual.localName || node.id.startsWith(visual.localName + '_')) {
          node.color = visual.color;
          if (visual.hasOwnProperty('imageUrl')) {
            node.imageUrl = visual.imageUrl;
          }
        }
      }
    }
    // this.addNodeTypesFromJSONToNodeTypesArray();
  }

  /*
   addNodeTypesFromJSONToNodeTypesArray() {
   for (const node of this.nodeTemplates) {
   this.nodeTypes.push({
   nodeType: node,
   nodeFromJSON: true
   }
   );
   }
   }
   */

  nodeFactory(paletteItem: any): void {
    if (this.nodeTypes.length > 0) {
      for (let i = this.nodeTypes.length - 1; i >= 0; i--) {
        if (paletteItem.name === this.nodeTypes[i].nodeType.name && this.nodeTypes[i].nodeFromJSON === false) {
          const numberOfNewInstance = this.nodeTypes[i].numberOfInstance + 1;
          this.nodeTypes.push({
            nodeType: new TNodeTemplate(
              [],
              paletteItem.name.concat('_' + numberOfNewInstance.toString()),
              paletteItem.name,
              1,
              1,
              [],
              [],
              {
                location: 'undefined',
                x: paletteItem.mousePositionX,
                y: paletteItem.mousePositionY,
              }
            ),
            numberOfInstance: numberOfNewInstance,
            nodeFromJSON: false
          });
          this.addedNewNode = true;
          break;
        }
        this.addedNewNode = false;
      }
      if (this.addedNewNode === false) {
        this.nodeTypes.push({
          nodeType: new TNodeTemplate(
            [],
            paletteItem.name,
            paletteItem.name,
            1,
            1,
            [],
            [],
            {
              location: 'undefined',
              x: paletteItem.mousePositionX,
              y: paletteItem.mousePositionY
            }
          ),
          numberOfInstance: 1,
          nodeFromJSON: false
        });
      }
    } else {
      this.nodeTypes.push({
        nodeType: new TNodeTemplate(
          [],
          paletteItem.name,
          paletteItem.name,
          1,
          1,
          [],
          [],
          {
            location: 'undefined',
            x: paletteItem.mousePositionX,
            y: paletteItem.mousePositionY
          }
        ),
        numberOfInstance: 1,
        nodeFromJSON: false
      });
    }
  }

  makeDraggable($event): void {
    this.newJsPlumbInstance.draggable($event);
  }

  layoutNodes(state: boolean): void {
    let y = 0;
    let x = 0;
    if (state === true) {
      y = y + 1;
      x = x + 1;
    }
    for (const node of this.nodeTemplates) {
      const width = document.getElementById(node.id).offsetWidth;
      const height = document.getElementById(node.id).offsetHeight;
      node.otherAttributes['{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}x'] = x;
      node.otherAttributes['{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}y'] = y;

      y = y + height + 50;
      x = x + width + 50;
    }
  }

  ngAfterViewInit(): void {
    for (let i = 0; i < this.relationshipTemplates.length; i++) {
      const sourceElement = this.relationshipTemplates[i].sourceElement;
      const targetElement = this.relationshipTemplates[i].targetElement;
      this.newJsPlumbInstance.draggable(sourceElement);
      this.newJsPlumbInstance.draggable(targetElement);
      const connection = new TRelationshipTemplate(sourceElement, targetElement);
      this.newJsPlumbInstance.connect({
        source: connection.sourceElement,
        target: connection.targetElement,
        overlays: [['Arrow', {width: 15, length: 15, location: 1, id: 'arrow', direction: 1}],
          ['Label', {
            label: '(Hosted On)',
            id: 'label',
            labelStyle: {font: 'bold 18px/30px Courier New, monospace'}
          }]
        ],
      });
    }
  }
}

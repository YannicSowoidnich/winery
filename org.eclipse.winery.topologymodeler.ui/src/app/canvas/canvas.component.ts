import { AfterContentInit, AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {JsPlumbService} from '../jsPlumbService';
import {JsonService} from '../json.service';
import {SharedNodeNavbarService} from '../shared-node-navbar.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit, AfterContentInit {
  paletteClicked = false;
  createdNodes = [];
  addedNewNode = false;
  nodeTemplates: any[] = [];
  relationshipTemplates: any[] = [];
  newJsPlumbInstance: any;
  visuals: any[];

  constructor(private jsPlumbService: JsPlumbService, private jsonService: JsonService,
              private _sharedNodeNavbarService: SharedNodeNavbarService) {

  }

  ngAfterContentInit() {
  }

  repaintJsPlumb() {
    this._sharedNodeNavbarService.buttonStates$.subscribe((a) => this.newJsPlumbInstance.repaintEverything());
  }

  ngOnInit() {

    this._sharedNodeNavbarService.paletteItem$.subscribe(
      (paletteItem) => {
        this.nodeFactory(paletteItem);
        this.paletteClicked = true;
      }
    );
    this.newJsPlumbInstance = this.jsPlumbService.getJsPlumbInstance();
    this.nodeTemplates = this.jsonService.getNodes();
    this.relationshipTemplates = this.jsonService.getRelationships();
    this.visuals = this.jsonService.getVisuals();

    console.log(this.nodeTemplates);
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
  }

  nodeFactory(paletteItem: any): void {
    if (this.createdNodes.length > 0) {
      for (let i = this.createdNodes.length - 1; i >= 0; i--) {
        if (paletteItem.title === this.createdNodes[i].title) {
          const numberOfNewInstance = this.createdNodes[i].numberOfInstance + 1;
          this.createdNodes.push({
            title: paletteItem.title,
            numberOfInstance: numberOfNewInstance,
            id: paletteItem.title.concat('_' + numberOfNewInstance.toString()),
            left: paletteItem.mousePositionX,
            top: paletteItem.mousePositionY
          });
          this.addedNewNode = true;
          break;
        }
        this.addedNewNode = false;
      }
      if (this.addedNewNode === false) {
        this.createdNodes.push({
          title: paletteItem.title,
          numberOfInstance: 1,
          id: paletteItem.title,
          left: paletteItem.mousePositionX,
          top: paletteItem.mousePositionY
        });
      }
    } else {
      this.createdNodes.push({
        title: paletteItem.title,
        numberOfInstance: 1,
        id: paletteItem.title,
        left: paletteItem.mousePositionX,
        top: paletteItem.mousePositionY
      });
    }
  }

  makeDraggable($event): void {
    this.newJsPlumbInstance.draggable($event);
  }

  ngAfterViewInit(): void {
    for (let i = 0; i < this.relationshipTemplates.length; i++) {
      const sourceElement = this.relationshipTemplates[i].sourceElement;
      const targetElement = this.relationshipTemplates[i].targetElement;
      this.newJsPlumbInstance.draggable(sourceElement);
      this.newJsPlumbInstance.draggable(targetElement);
      this.newJsPlumbInstance.connect({
        source: sourceElement,
        target: targetElement,
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

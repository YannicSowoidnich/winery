import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {JsPlumbService} from '../jsPlumbService';
import {JsonService} from '../json.service';
import {SharedNodeNavbarService} from '../shared-node-navbar.service';

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

  constructor(private jsPlumbService: JsPlumbService, private jsonService: JsonService,
              private _sharedNodeNavbarService: SharedNodeNavbarService) {
    this.newJsPlumbInstance = this.jsPlumbService.getJsPlumbInstance();
    this.nodeTemplates = this.jsonService.getNodes();
    this.relationshipTemplates = this.jsonService.getRelationships();
  }

  ngOnInit() {
    this._sharedNodeNavbarService.paletteItem$.subscribe(
      (paletteItem) => {
        this.generateIDOfNode(paletteItem);
        this.isActive = true; }
    );
  }

  generateIDOfNode(paletteItem: any): void {
    if (this.titleOfClickedItem.length > 0) {
      for (let i = this.titleOfClickedItem.length - 1; i >= 0; i--) {
        if (paletteItem.title === this.titleOfClickedItem[i].title) {
          const numberOfNewInstance = this.titleOfClickedItem[i].numberOfInstance + 1;
          this.titleOfClickedItem.push({
            title: paletteItem.title, numberOfInstance: numberOfNewInstance,
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
        this.titleOfClickedItem.push({
          title: paletteItem.title,
          numberOfInstance: 1,
          id: paletteItem.title,
          left: paletteItem.mousePositionX,
          top: paletteItem.mousePositionY
        });
      }
    } else {
      this.titleOfClickedItem.push({
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
        overlays: [['Arrow', {width: 15, length: 15, location: 0, id: 'arrow', direction: -1}],
          ['Label', {
            label: 'hostedOn()',
            id: 'label',
            labelStyle: {font: 'bold 18px/30px Courier New, monospace'}
          }]
        ],
      });
    }
  }
}

import {AfterViewInit, Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {JsPlumbService} from '../jsPlumbService';
import {JsonService} from '../json.service';
import { TNodeTemplate } from '../tnode-template';
import { TRelationshipTemplate } from '../trelationship-template';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit, OnChanges {
  paletteClicked = false;
  addedNewNode = false;
  nodeTemplates: any[] = [];
  nodeTypes: any[] = [];
  relationshipTemplates: any[] = [];
  newJsPlumbInstance: any;
  visuals: any[];
  width = 0;
  height = 0;
  @Input() pressedNavBarButton: any;
  @Input() pressedPaletteItem: any;

  constructor(private jsPlumbService: JsPlumbService, private jsonService: JsonService) {
  }

  repaintJsPlumb() {
    this.newJsPlumbInstance.repaintEverything();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.pressedNavBarButton) {
      if (changes.pressedPaletteItem.currentValue !== undefined) {
        const paletteItem = changes.pressedPaletteItem.currentValue;
        this.nodeFactory(paletteItem);
        this.paletteClicked = true;
      }
    } else if (!changes.pressedPaletteItem) {
      if (changes.pressedNavBarButton.currentValue.name === 'layout') {
        this.layoutNodes(changes.pressedNavBarButton.currentValue.state);
      }
    }
  }

  ngOnInit() {
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
  }

  nodeFactory(paletteItem: any): void {
    if (this.nodeTypes.length > 0) {
      for (let i = this.nodeTypes.length - 1; i >= 0; i--) {
        if (paletteItem.name === this.nodeTypes[i].nodeType.name && this.nodeTypes[i].nodeFromJSON === false) {
          const numberOfNewInstance = this.nodeTypes[i].numberOfInstance + 1;
          this.nodeTypes.push({
            nodeType: new TNodeTemplate(
              [],
              [],
              {
                '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}location': 'undefined',
                '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}x': paletteItem.mousePositionX,
                '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}y': paletteItem.mousePositionY
              },
              [],
              paletteItem.name.concat('_' + numberOfNewInstance.toString()),
              [],
              paletteItem.name,
              1,
              1
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
            [],
            {
              '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}location': 'undefined',
              '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}x': paletteItem.mousePositionX,
              '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}y': paletteItem.mousePositionY
            },
            [],
            paletteItem.name,
            [],
            paletteItem.name,
            1,
            1
          ),
          numberOfInstance: 1,
          nodeFromJSON: false
          });
      }
    } else {
      this.nodeTypes.push({
        nodeType: new TNodeTemplate(
          [],
          [],
          {
            '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}location': 'undefined',
           '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}x': paletteItem.mousePositionX,
           '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}y': paletteItem.mousePositionY
          },
          [],
          paletteItem.name,
          [],
          paletteItem.name,
          1,
          1
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

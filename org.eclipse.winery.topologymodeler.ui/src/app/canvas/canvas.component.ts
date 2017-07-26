import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ElementRef, Output,
  EventEmitter, HostListener } from '@angular/core';
import { JsPlumbService } from '../jsPlumbService';
import { JsonService } from '../jsonService/json.service';
import { TNodeTemplate, TRelationshipTemplate } from '../ttopology-template';
import ELK from 'elkjs/lib/elk.bundled.js';

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
  selectedNodes: string[] = [];
  relationshipTemplates: any[] = [];
  newJsPlumbInstance: any;
  visuals: any[];
  @Input() pressedNavBarButton: any;
  @Input() pressedPaletteItem: any;
  unselectNodes: any[] = [];
  nodeSelected = false;
  nodeArrayEmpty = false;
  @Output() closePalette: EventEmitter<string>;
  pageX: Number;
  pageY: Number;
  selectionActive: boolean;
  initialW: number;
  initialH: number;
  selectionWidth: number;
  selectionHeight: number;
  callOpenSelector: boolean;
  callSelectItems: boolean;
  offsetY = 40;
  offsetX = 0;
  startTime: number;
  endTime: number;
  longPress: boolean;
  crosshair = false;
  xPos: number;

  constructor(private jsPlumbService: JsPlumbService, private jsonService: JsonService, private _eref: ElementRef) {
    this.closePalette = new EventEmitter();
  }

  @HostListener('click', ['$event'])
  onClick($event) {
    if (this._eref.nativeElement.contains($event.target) && this.longPress === false) {
      this.newJsPlumbInstance.removeFromAllPosses(this.selectedNodes);
      this.unselectNodes = this.selectedNodes;
      this.selectedNodes = [];
      console.log('ausgeführt');
      if ($event.clientX > 200) {
        this.closePalette.emit('Close Palette');
      }
    }
  }

  @HostListener('mousedown', ['$event'])
  showSelectionRange($event) {
    if (($event.pageY  - this.offsetY) > 0) {
      this.selectionActive = true;
      this.pageX = $event.pageX + this.offsetX;
      this.pageY = $event.pageY - this.offsetY;
      this.initialW = $event.pageX;
      this.initialH = $event.pageY;
      this.callOpenSelector = true;
      this.callSelectItems = true;
    }
    this.crosshair = true;
  }

  @HostListener('mousemove', ['$event'])
  openSelector($event) {
    if (this.callOpenSelector) {
      this.selectionWidth = Math.abs(this.initialW - $event.pageX);
      this.selectionHeight = Math.abs(this.initialH - $event.pageY);
      if ($event.pageX <= this.initialW && $event.pageY >= this.initialH) {
        this.pageX = $event.pageX + this.offsetX;
      } else if ($event.pageY <= this.initialH && $event.pageX >= this.initialW) {
        this.pageY = $event.pageY - this.offsetY;
      } else if ($event.pageY < this.initialH && $event.pageX < this.initialW) {
        this.pageX = $event.pageX + this.offsetX;
        this.pageY = $event.pageY - this.offsetY;
      }
    }
  }
  @HostListener('mouseup', ['$event'])
  selectElements($event) {
    if (this.callSelectItems) {
      this.callOpenSelector = false;
      this.callSelectItems = false;
      for (const node of this.nodeTemplates) {
        const aElem = document.getElementById('selection');
        const bElem = document.getElementById(node.id);
        const result = this.doObjectsCollide(aElem, bElem);
        if (result === true) {
          this.enhanceDragSelection(node.id);
        }
      }
    }
    this.crosshair = false;
    this.selectionActive = false;
    this.selectionWidth = 0;
    this.selectionHeight = 0;
  }

  private getOffset( el ) {
    let _x = 0;
    let _y = 0;
    while ( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: _y, left: _x };
  }

  doObjectsCollide(a, b): boolean {
    const aTop = this.getOffset(a).top;
    const aLeft = this.getOffset(a).left;
    const bTop = this.getOffset(b).top;
    const bLeft = this.getOffset(b).left;

    return !(
      ((aTop + a.getBoundingClientRect().height) < (bTop)) ||
      (aTop > (bTop + b.getBoundingClientRect().height)) ||
      ((aLeft + a.getBoundingClientRect().width) < bLeft) ||
      (aLeft > (bLeft + b.getBoundingClientRect().width))
    );
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
    this.visuals = this.jsonService.getVisuals();
    for (const node of this.nodeTemplates) {
      for (const visual of this.visuals) {
        console.log('node.id = ' + node.id);
        console.log('visual = ' + JSON.stringify(visual));
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
        if (paletteItem.name === this.nodeTypes[i].nodeType._type && this.nodeTypes[i].nodeFromJSON === false) {
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
        this.pushNodeToArray(paletteItem);
      }
    } else {
      this.pushNodeToArray(paletteItem);
    }
  }

  makeDraggable($event): void {
    this.newJsPlumbInstance.draggable($event);
  }

  layoutNodes(state: boolean): void {

    const children: any[] = [];
    const edges: any[] = [];
    let counter = 0;
    const xPos = 0;
    const yPos = 0;

    // get with and height of nodes
    for (const node of this.nodeTemplates) {
      const width = document.getElementById(node.id).offsetWidth;
      const height = document.getElementById(node.id).offsetHeight;
      children.push({id: node.id, width: width, height: height});
    }
    // get source and targets of relationships
    for (const rel of this.relationshipTemplates) {
      const sourceElement = rel.sourceElement;
      const targetElement = rel.targetElement;

      edges.push({id: counter.toString(), sources: [sourceElement], targets: [targetElement]});
      counter = counter + 1;
    }

    const elk = new ELK();
    const graph = {
      id: 'root',
      properties: {'elk.algorithm': 'layered'},
      children: children,
      edges: edges
    };

    const promise = elk.layout(graph);

    promise.then(data => {

      this.xPos = data.children;

      // yPos = data.children[counter].y;

    }).then(this.test());

  }

  test(): void {
    let counter = 0;
    for (const node of this.nodeTemplates) {
      const width = document.getElementById(node.id).offsetWidth;
      const height = document.getElementById(node.id).offsetHeight;

      console.log('Schleife:');
      console.log(this.xPos);
      // node.otherAttributes['x'] = xPos;
      // node.otherAttributes['y'] = yPos;
      counter = counter + 1;
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

  private checkingNodeSelectionForDuplicateIDs(id: string) {
    this.nodeSelected = false;
    for (const node of this.selectedNodes) {
      if (node === id) {
        this.nodeSelected = true;
      }
    }
    if (this.nodeSelected === false) {
      this.newJsPlumbInstance.removeFromAllPosses(this.selectedNodes);
      this.unselectNodes = this.selectedNodes;
      this.selectedNodes = [];
    }
  }

  checkIfNodeInSelection($event): void {
    this.checkingNodeSelectionForDuplicateIDs($event);
  }

  private arrayContainsNode(arrayOfNodes: any[], id: string): boolean {
    if (arrayOfNodes !== null && arrayOfNodes.length > 0) {
      for (let i = 0; i < arrayOfNodes.length; i++) {
        if (arrayOfNodes[i] === id) {
          return true;
        }
      }
    }
    return false;
  }

  private enhanceDragSelection(id: string) {
    this.nodeArrayEmpty = false;
    this.newJsPlumbInstance.addToPosse(id, 'dragSelection');
    this.nodeArrayEmpty = this.arrayContainsNode(this.selectedNodes, id);
    if (!this.nodeArrayEmpty) {
      console.log('ausgeführt');
      this.selectedNodes.push(id);
    }
  }

  addNodeToDragSelection($event): void {
    this.enhanceDragSelection($event);
  }

  pushNodeToArray(paletteItem: any): void {
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

  trackTimeOfMouseDown(): void {
    this.startTime = new Date().getTime();
  }

  trackTimeOfMouseUp(): void {
    this.endTime = new Date().getTime();
    this.testTimeDifference();
  }

  private testTimeDifference(): void {
    if ((this.endTime - this.startTime) < 250) {
      this.longPress = false;
    } else if (this.endTime - this.startTime >= 300) {
      this.longPress = true;
    }
  }
}

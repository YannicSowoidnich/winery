import {
  AfterViewInit, Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild
} from '@angular/core';
import { TTopologyTemplate } from '../ttopology-template';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css'],
})
export class NodeComponent implements OnInit, AfterViewInit, OnChanges {
  public items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  public accordionGroupPanel = 'accordionGroupPanel';
  public customClass = 'customClass';
  targetLocationsVisible = false;
  policiesVisible = false;
  requirementsCapabilitiesVisible = false;
  deploymentArtifactsVisible = false;
  propertiesVisible = false;
  typesVisible = true;
  idsVisible = true;
  connectorEndpointVisible = false;
  startTime;
  endTime;
  longpress = false;
  makeSelectionVisible = false;
  unselectedNodeIdPresent = false;

  @Input() title: string;
  @Input() left: number;
  @Input() top: number;
  @Output() sendId: EventEmitter<string>;
  @Input() nodeColor: string;
  @Input() nodeImageUrl: string;
  @Output() askForRepaint: EventEmitter<string>;
  @Input() navBarButtonClicked: any;
  @Output() addNodeToDragSelection: EventEmitter<any>;
  @Output() checkIfNodeInSelection: EventEmitter<string>;
  @Input() unselectNodes: any[] = [];

  public status: any = {
    isFirstOpen: true,
    isOpen: false
  };

  public addItem(): void {
    this.items.push(`Items ${this.items.length + 1}`);
  }

  constructor() {
    this.sendId = new EventEmitter();
    this.askForRepaint = new EventEmitter();
    this.addNodeToDragSelection = new EventEmitter();
    this.checkIfNodeInSelection = new EventEmitter();
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.sendId.emit(this.title);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.unselectNodes && !changes.updatingNode) {
      switch (changes.navBarButtonClicked.currentValue.name) {
        case 'targetLocations': {
          this.targetLocationsVisible = !this.targetLocationsVisible;
          break;
        }
        case 'policies': {
          this.policiesVisible = !this.policiesVisible;
          break;
        }
        case 'requirementsCapabilities': {
          this.requirementsCapabilitiesVisible = !this.requirementsCapabilitiesVisible;
          break;
        }
        case 'deploymentArtifacts': {
          this.deploymentArtifactsVisible = !this.deploymentArtifactsVisible;
          break;
        }
        case 'properties': {
          this.propertiesVisible = !this.propertiesVisible;
          break;
        }
        case 'types': {
          this.typesVisible = !this.typesVisible;
          break;
        }
        case 'ids': {
          this.idsVisible = !this.idsVisible;
          break;
        }
      }
      setTimeout(() => this.askForRepaint.emit(), 1);
    } else if (!changes.navBarButtonClicked) {
      this.unselectedNodeIdPresent = false;
      this.unselectedNodeIdPresent = this.checkIfArrayContainsElement(this.unselectNodes, this.title);
      if (this.unselectedNodeIdPresent) {
        this.makeSelectionVisible = false;
      }
    }
  }

  private checkIfArrayContainsElement(arrayOfNodes: any[], id: string): boolean {
    if (arrayOfNodes !== null && arrayOfNodes.length > 0) {
      for (let i = 0; i < arrayOfNodes.length; i++) {
        if (arrayOfNodes[i] === id) {
          return true;
        }
      }
    }
    return false;
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
      this.longpress = false;
    } else if (this.endTime - this.startTime >= 300) {
      this.longpress = true;
    }
    }

  showConnectorEndpoint($event): void {
    $event.stopPropagation();
    if ($event.ctrlKey) {
      this.addNodeToDragSelection.emit(this.title);
      this.makeSelectionVisible = !this.makeSelectionVisible;
    } else {
      (this.longpress) ? $event.preventDefault() : this.connectorEndpointVisible = !this.connectorEndpointVisible;
      this.checkIfNodeInSelection.emit(this.title);
      }
  }
}

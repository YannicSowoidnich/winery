import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { SharedNodeNavbarService } from '../shared-node-navbar.service';
import { ResizeSensor } from 'css-element-queries';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
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
  typesVisible = false;
  idsVisible = true;

  @Input() title: string;
  @Input() left: number;
  @Input() top: number;
  @Output() sendId = new EventEmitter<string>();
  @Input() nodeColor: string;
  @Input() nodeImageUrl: string;
  @Output() askForRepaint = new EventEmitter();
  @Input() navBarButtonClicked: any;


  public status: any = {
    isFirstOpen: true,
    isOpen: false
  };

  public addItem(): void {
    this.items.push(`Items ${this.items.length + 1}`);
  }

  constructor() {

  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.sendId.emit(this.title);
    const me = this;
    const element = document.getElementById(this.title);
    new ResizeSensor(element, function () {
      me.askForRepaint.emit();
    });
    const target = document.getElementById(this.title);
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function () {
        me.askForRepaint.emit();
      });
    });
    const config = {attributes: true};
    observer.observe(target, config);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.navBarButtonClicked.currentValue !== undefined) {
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
    }
  }
}

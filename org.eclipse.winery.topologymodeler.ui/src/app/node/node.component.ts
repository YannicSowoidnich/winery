import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SharedNodeNavbarService} from '../shared-node-navbar.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit, AfterViewInit {
  public items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  public accordionGroupPanel = 'accordionGroupPanel';
  public customClass = 'customClass';
  targetLocationsVisible = false;
  policiesVisible = false;
  requirementsCapabilitiesVisible = false;
  deploymentArtifactsVisible = false;
  propertiesVisible = false;
  typesVisible = false;
  idsVisible = false;
  @Input() title: string;
  @Output() sendId = new EventEmitter<string>();

  public status: any = {
    isFirstOpen: true,
    isOpen: false
  };

  public addItem(): void {
    this.items.push(`Items ${this.items.length + 1}`);
  }

  constructor(private _sharedNodeNavbarService: SharedNodeNavbarService) {
  }

  ngOnInit() {
    this._sharedNodeNavbarService.buttonStates$.subscribe(
      (buttonChangeObject) => {
        switch (buttonChangeObject.buttonID) {
          case 'targetLocations': {
            this.targetLocationsVisible = buttonChangeObject.state;
            break;
          }
          case 'policies': {
            this.policiesVisible = buttonChangeObject.state;
            break;
          }
          case 'requirementsCapabilities': {
            this.requirementsCapabilitiesVisible = buttonChangeObject.state;
            break;
          }
          case 'deploymentArtifacts': {
            this.deploymentArtifactsVisible = buttonChangeObject.state;
            break;
          }
          case 'properties': {
            this.propertiesVisible = buttonChangeObject.state;
            break;
          }
          case 'types': {
            this.typesVisible = buttonChangeObject.state;
            break;
          }
          case 'ids': {
            this.idsVisible = buttonChangeObject.state;
            break;
          }
        }
      });
  }

  ngAfterViewInit(): void {
    this.sendId.emit(this.title);
  }
}

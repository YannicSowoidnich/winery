import {Component, Input, OnInit} from '@angular/core';
import {SharedNodeNavbarService} from '../shared-node-navbar.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  public items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  public accordionGroupPanel = 'accordionGroupPanel';
  public customClass = 'customClass';
  targetLocationsVisible = false;
  @Input() title: string;

  public accordionContents: any = {
    propertiesOpen: true
  };

  public status: any = {
    isFirstOpen: true,
    isOpen: false
  };

  public groups: any[] = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  public addItem(): void {
    this.items.push(`Items ${this.items.length + 1}`);
  }

  constructor(private _sharedNodeNavbarService: SharedNodeNavbarService) {
    this._sharedNodeNavbarService.visible$.subscribe(
      data => {
        console.log('Sibling2Component-received from sibling1: ' + data);
        if (data === 'false') {
          this.targetLocationsVisible = false;
        } else {
          this.targetLocationsVisible = true;
        }
      });
  }

  ngOnInit() {

  }
}

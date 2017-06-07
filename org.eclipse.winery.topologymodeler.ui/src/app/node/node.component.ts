import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {JsPlumbService} from '../jsPlumbService';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit, AfterViewInit {
  public items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  public accordionGroupPanel = 'accordionGroupPanel';
  public customClass = 'customClass';
  firstInstance: any;
  @Input() id;
  title = 'Ubuntu-14.04-VM ';
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

  constructor(private jsPlumbService: JsPlumbService) {
    this.firstInstance = jsPlumbService.getJsPlumbInstance();
  }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.firstInstance.importDefaults({
      PaintStyle: {
        strokeWidth: 2,
        stroke: 'rgba(200,0,0,0.5)',
      }
      ,
      Connector: ['Flowchart'],
      Endpoint:  ['Dot', {radius: 10}],
      EndpointStyles : { fill: '#225588' },
      ConnectionsDetachable: false,
      Anchor: 'Continuous'
    });
    this.firstInstance.draggable(this.id.toString());
  }

}

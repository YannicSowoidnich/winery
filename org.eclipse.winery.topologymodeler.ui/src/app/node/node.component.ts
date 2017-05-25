import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  constructor() { }

  public items: string[] = ['Item 1', 'Item 2', 'Item 3'];

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
  ngOnInit() {
  }

}

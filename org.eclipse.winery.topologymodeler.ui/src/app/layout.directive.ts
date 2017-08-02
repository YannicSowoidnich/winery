import { AfterViewInit, Directive } from '@angular/core';
import ELK from 'elkjs/lib/elk.bundled.js';

@Directive({
  selector: '[appLayout]',
})
export class LayoutDirective implements AfterViewInit {

  public layoutNodes(nodeTemplates: any[], relationshipTemplates: any[], jsPlumbInstance: any): void {

    const children: any[] = [];
    const edges: any[] = [];
    let counter = 0;

    // get with and height of nodes
    for (const node of nodeTemplates) {
      const width = document.getElementById(node.id).offsetWidth;
      const height = document.getElementById(node.id).offsetHeight;
      children.push({id: node.id, width: width, height: height});
    }

    // get source and targets of relationships
    for (const rel of relationshipTemplates) {
      const sourceElement = rel.sourceElement;
      const targetElement = rel.targetElement;
      edges.push({id: counter.toString(), sources: [sourceElement], targets: [targetElement]});
      counter = counter + 1;
    }
    // initialize elk object which will layout the graph
    const elk = new ELK({});
    const graph = {
      id: 'root',
      properties: {
        'elk.algorithm': 'layered',
        'elk.spacing.nodeNode': '200',
        'elk.direction': 'DOWN',
        'elk.layered.spacing.nodeNodeBetweenLayers': '200'
      },
      children: children,
      edges: edges,
    };

    const promise = elk.layout(graph);
    promise.then((data) => {
      this.applyPositions(data, nodeTemplates, jsPlumbInstance);
    });
  }

  private applyPositions(data: any, nodeTemplates: any[], jsPlumbInstance: any): void {
    let counter = 0;
    for (const node of nodeTemplates) {
      // apply the new positions to the nodes
      node.otherAttributes['x'] = data.children[counter].x;
      node.otherAttributes['y'] = data.children[counter].y + 40;
      counter = counter + 1;
    }
    setTimeout(() => jsPlumbInstance.repaintEverything(), 1);
  }

  ngAfterViewInit() {

  }
}

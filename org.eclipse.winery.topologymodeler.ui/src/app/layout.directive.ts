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

  public alignHorizontal(selectedNodes: any[], jsPlumbInstance: any): void {
    let smallestVal = 0;
    let biggestVal = 0;
    let result;
    let counter = 0;
    // if there is only 1 node selected, do nothing
    if (!( selectedNodes.length === 1)) {
      for (const node of selectedNodes) {
        // if its the first iteration, inititalize
        if ( counter === 0 ) {
          smallestVal = document.getElementById(node.id).offsetTop;
          biggestVal = document.getElementById(node.id).offsetTop;
        } else {
          // if the biggestValue is smaller than the current value, save it
          if (biggestVal < document.getElementById(node.id).offsetTop) {
            biggestVal = document.getElementById(node.id).offsetTop;
          }
          // if the smallest val is bigger than the current value, save it.
          if (smallestVal > document.getElementById(node.id).offsetTop) {
            smallestVal = document.getElementById(node.id).offsetTop;
          }
        }
        counter = counter + 1;
      }
      result = biggestVal - smallestVal;
      result = (result / 2);
      result = smallestVal + result;
      // iterate over the nodes again, and apply positions
      for (const node of selectedNodes) {
        node.otherAttributes['y'] = result;
      }
      setTimeout(() => jsPlumbInstance.repaintEverything(), 1);
    }
  }

  public alignVertical(selectedNodes: any[], jsPlumbInstance: any): void {
    let smallestVal = 0;
    let biggestVal = 0;
    let result;
    let counter = 0;
    // if there is only 1 node selected, do nothing
    if (!( selectedNodes.length === 1)) {
      for (const node of selectedNodes) {
        // if its the first iteration, inititalize
        if ( counter === 0 ) {
          smallestVal = document.getElementById(node.id).offsetLeft;
          biggestVal = document.getElementById(node.id).offsetLeft;
        } else {
          // if the biggestValue is smaller than the current value, save it
          if (biggestVal < document.getElementById(node.id).offsetLeft) {
            biggestVal = document.getElementById(node.id).offsetLeft;
          }
          // if the smallest val is bigger than the current value, save it.
          if (smallestVal > document.getElementById(node.id).offsetLeft) {
            smallestVal = document.getElementById(node.id).offsetLeft;
          }
        }
        counter = counter + 1;
      }
      result = biggestVal - smallestVal;
      result = (result / 2);
      result = smallestVal + result;
      // iterate over the nodes again, and apply positions
      for (const node of selectedNodes) {
        node.otherAttributes['x'] = result;
      }
      setTimeout(() => jsPlumbInstance.repaintEverything(), 1);
    }
  }

  ngAfterViewInit() {

  }
}

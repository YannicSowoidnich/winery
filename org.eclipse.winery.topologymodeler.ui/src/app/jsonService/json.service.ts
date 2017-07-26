import { Injectable, OnInit } from '@angular/core';
import { QName } from '../qname';
import { TTopologyTemplate, Visuals } from '../ttopology-template';

@Injectable()
export class JsonService implements OnInit {

  testJson: any;
  visuals: Visuals[];

  getRelationships(): any {
    return this.testJson.relationshipTemplates;
  }

  getNodes(): any {
    return this.testJson.nodeTemplates;
  }

  getVisuals(): any {
    return this.visuals;
  }

  setData(visuals: any, topologyTemplate: any) {
    // This causes "type not compatible error"
    this.visuals = visuals;
    this.testJson = topologyTemplate;
  }

  setVisuals(visuals: any) {
    this.visuals = visuals;
    // TODO Josip: replace with proper QName implementation: Parse localName from QName
    for (const visual of this.visuals) {
      visual.localName = visual.nodeTypeId.split('}')[1];
    }
  }

  setTopologyTemplate(topologyTemplate: any) {
    this.testJson = topologyTemplate;
  }

  constructor() {
  }

  ngOnInit() {
    // TODO visual local name

  }

}

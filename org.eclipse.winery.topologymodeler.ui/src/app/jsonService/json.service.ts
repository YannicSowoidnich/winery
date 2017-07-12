import { Injectable } from '@angular/core';
import { QName } from '../qname';
import { TTopologyTemplate, Visuals } from '../ttopology-template';

@Injectable()
export class JsonService {

  testJson: any;
  visuals: any;

  testJson2 = {
    'nodeTemplates': [
      {
        'id': 'plantage',
      },
      {
        'id': 'tree',
      },
      {
        'id': 'tree_2',
      },
      {
        'id': 'baobab',
      },
      {
        'id': 'orange',
      },
      {
        'id': 'orange_2',
      },
      {
        'id': 'baobab_2',
      },
      {
        'id': 'baobab_3',
      }
    ],
    'relationshipTemplates': [
      {
        'sourceElement': 'baobab',
        'targetElement': 'tree'
      },
      {
        'sourceElement': 'baobab_2',
        'targetElement': 'tree'
      },
      {
        'sourceElement': 'baobab_3',
        'targetElement': 'tree'
      },
      {
        'sourceElement': 'orange',
        'targetElement': 'tree_2'
      },
      {
        'sourceElement': 'orange_2',
        'targetElement': 'tree_2'
      },
      {
        'sourceElement': 'tree_2',
        'targetElement': 'plantage'
      },
      {
        'sourceElement': 'tree',
        'targetElement': 'plantage'
      }
    ]
  };

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
  }

  setTopologyTemplate(topologyTemplate: any) {
    this.testJson = topologyTemplate;
  }

  constructor() {
    // this is commented out because not sure if we need that. Also causes bugs, because visuals is undefined at the start of the program
/*    for (const el of this.visuals) {
      const singleQName = new QName(el.nodeTypeId);
      const singleLocalName = singleQName.localName;
      el.localName = singleLocalName;
    }*/
  }

}

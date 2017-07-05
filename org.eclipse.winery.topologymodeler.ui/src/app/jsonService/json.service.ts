import { Injectable } from '@angular/core';
import { QName } from '../qname';
import { TTopologyTemplate, Visuals } from '../ttopology-template';

@Injectable()
export class JsonService {
  visuals = [
    {
      imageUrl: 'http://www.example.org/winery/test/nodetypes/' +
      'http%253A%252F%252Fwinery.opentosca.org%252Ftest%252Fnodetypes%252Ffruits/baobab/appearance/50x50',
      color: '#89ee01',
      nodeTypeId: '{http://winery.opentosca.org/test/nodetypes/fruits}baobab',
      localName: ''
    },
    {
      color: '#89ee01',
      nodeTypeId: '{http://winery.opentosca.org/test/nodetypes/fruits}grape',
      localName: ''
    },
    {
      color: '#89ee01',
      nodeTypeId: '{http://winery.opentosca.org/test/nodetypes/fruits}lemon',
      localName: ''
    },
    {
      color: '#89ee01',
      nodeTypeId: '{http://winery.opentosca.org/test/nodetypes/fruits}mango',
      localName: ''
    },
    {
      color: '#01ace2',
      nodeTypeId: '{http://winery.opentosca.org/test/ponyuniverse}oat',
      localName: ''
    },
    {
      color: '#FF7F50',
      nodeTypeId: '{http://winery.opentosca.org/test/nodetypes/fruits}orange',
      localName: ''
    },
    {
      color: '#cb1016',
      nodeTypeId: '{http://winery.opentosca.org/test/ponyuniverse}pasture',
      localName: ''
    },
    {
      color: '#6f02b4',
      nodeTypeId: '{http://winery.opentosca.org/test/nodetypes/fruits}plantage',
      localName: ''
    },
    {
      color: '#bb1c9a',
      nodeTypeId: '{http://winery.opentosca.org/test/ponyuniverse}shetland_pony',
      localName: ''
    },
    {
      color: '#8ac3a0',
      nodeTypeId: '{http://winery.opentosca.org/test/ponyuniverse}stall',
      localName: ''
    },
    {
      color: '#8b0227',
      nodeTypeId: '{http://winery.opentosca.org/test/ponyuniverse}straw',
      localName: ''
    },
    {
      color: '#36739e',
      nodeTypeId: '{http://winery.opentosca.org/test/nodetypes/fruits}tree',
      localName: ''
    },
    {
      color: '#458ac5',
      nodeTypeId: '{http://winery.opentosca.org/test/ponyuniverse}trough',
      localName: ''
    },
    {
      color: '#e47c98',
      nodeTypeId: '{http://winery.opentosca.org/test/ponyuniverse}unicorn',
      localName: ''
    }
  ];

  testJson = {
    documentation: [],
    any: [],
    otherAttributes: {},
    nodeTemplates: [
      {
        documentation: [],
        any: [],
        otherAttributes: {
          location: 'undefined',
          x: 958,
          y: 894
        },
        id: 'plantage',
        type: '{http://winery.opentosca.org/test/nodetypes/fruits}plantage',
        name: 'plantage',
        minInstances: 1,
        maxInstances: 1
      },
      {
        documentation: [],
        any: [],
        otherAttributes: {
          location: 'undefined',
          x: 606,
          y: 67
        },
        id: 'tree',
        type: '{http://winery.opentosca.org/test/nodetypes/fruits}tree',
        name: 'tree',
        minInstances: 1,
        maxInstances: 1
      },
      {
        documentation: [],
        any: [],
        otherAttributes: {
          location: 'undefined',
          x: 512,
          y: 785
        },
        id: 'baobab',
        type: '{http://winery.opentosca.org/test/nodetypes/fruits}baobab',
        name: 'baobab',
        minInstances: 1,
        maxInstances: 1
      },
      {
        documentation: [],
        any: [],
        otherAttributes: {
          location: 'undefined',
          x: 658,
          y: 394
        },
        id: 'banana',
        type: '{http://winery.opentosca.org/test/nodetypes/fruits}banana',
        name: 'banana',
        minInstances: 1,
        maxInstances: 1
      },
      {
        documentation: [],
        any: [],
        otherAttributes: {
          location: 'undefined',
          x: 214,
          y: 864
        },
        id : 'mango',
        type: '{http://winery.opentosca.org/test/nodetypes/fruits}mango',
        name: 'mango',
        minInstances: 1,
        maxInstances: 1
      }
    ],
    relationshipTemplates: [
    ]
  };

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

  setData(visuals: Visuals[], topologyTemplate: TTopologyTemplate) {
    this.visuals = visuals;
    this.testJson = topologyTemplate;
  }

  constructor() {
    for (const el of this.visuals) {
      const singleQName = new QName(el.nodeTypeId);
      const singleLocalName = singleQName.localName;
      el.localName = singleLocalName;
    }
  }

}

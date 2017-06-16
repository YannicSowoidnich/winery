import { Injectable } from '@angular/core';
import { QName } from './qname';

@Injectable()
export class JsonService {
  visuals = [
    {
      'imageUrl': 'http://www.example.org/winery/test/nodetypes/' +
      'http%253A%252F%252Fwinery.opentosca.org%252Ftest%252Fnodetypes%252Ffruits/baobab/appearance/50x50',
      'color': '#89ee01',
      'nodeTypeId': '{http://winery.opentosca.org/test/nodetypes/fruits}baobab',
      'localName': ''
    },
    {
      'color': '#89ee01',
      'nodeTypeId': '{http://winery.opentosca.org/test/nodetypes/fruits}grape',
      'localName': ''
    },
    {
      'color': '#89ee01',
      'nodeTypeId': '{http://winery.opentosca.org/test/nodetypes/fruits}lemon',
      'localName': ''
    },
    {
      'color': '#89ee01',
      'nodeTypeId': '{http://winery.opentosca.org/test/nodetypes/fruits}mango',
      'localName': ''
    },
    {
      'color': '#01ace2',
      'nodeTypeId': '{http://winery.opentosca.org/test/ponyuniverse}oat',
      'localName': ''
    },
    {
      'color': '#FF7F50',
      'nodeTypeId': '{http://winery.opentosca.org/test/nodetypes/fruits}orange',
      'localName': ''
    },
    {
      'color': '#cb1016',
      'nodeTypeId': '{http://winery.opentosca.org/test/ponyuniverse}pasture',
      'localName': ''
    },
    {
      'color': '#6f02b4',
      'nodeTypeId': '{http://winery.opentosca.org/test/nodetypes/fruits}plantage',
      'localName': ''
    },
    {
      'color': '#bb1c9a',
      'nodeTypeId': '{http://winery.opentosca.org/test/ponyuniverse}shetland_pony',
      'localName': ''
    },
    {
      'color': '#8ac3a0',
      'nodeTypeId': '{http://winery.opentosca.org/test/ponyuniverse}stall',
      'localName': ''
    },
    {
      'color': '#8b0227',
      'nodeTypeId': '{http://winery.opentosca.org/test/ponyuniverse}straw',
      'localName': ''
    },
    {
      'color': '#36739e',
      'nodeTypeId': '{http://winery.opentosca.org/test/nodetypes/fruits}tree',
      'localName': ''
    },
    {
      'color': '#458ac5',
      'nodeTypeId': '{http://winery.opentosca.org/test/ponyuniverse}trough',
      'localName': ''
    },
    {
      'color': '#e47c98',
      'nodeTypeId': '{http://winery.opentosca.org/test/ponyuniverse}unicorn',
      'localName': ''
    }
  ];

  testJson = {
    'documentation': [],
    'any': [],
    'otherAttributes': {},
    'nodeTemplates': [
      {
        'documentation': [],
        'any': [],
        'otherAttributes': {
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}location': 'undefined',
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}x': '958',
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}y': '894'
        },
        'id': 'plantage',
        'type': '{http://winery.opentosca.org/test/nodetypes/fruits}plantage',
        'name': 'plantage',
        'minInstances': 1,
        'maxInstances': '1'
      },
      {
        'documentation': [],
        'any': [],
        'otherAttributes': {
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}location': 'undefined',
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}x': '606',
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}y': '671'
        },
        'id': 'tree',
        'type': '{http://winery.opentosca.org/test/nodetypes/fruits}tree',
        'name': 'tree',
        'minInstances': 1,
        'maxInstances': '1'
      },
      {
        'documentation': [],
        'any': [],
        'otherAttributes': {
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}location': 'undefined',
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}x': '1441',
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}y': '645'
        },
        'id': 'tree_2',
        'type': '{http://winery.opentosca.org/test/nodetypes/fruits}tree',
        'name': 'tree_3',
        'minInstances': 1,
        'maxInstances': '1'
      },
      {
        'documentation': [],
        'any': [],
        'otherAttributes': {
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}location': 'undefined',
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}x': '324',
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}y': '333'
        },
        'properties': {
          'any': '<?xml version=\'1.0\' encoding=\'UTF-16\'?>\n<wfn:BaobabProperties ' +
          'xmlns=\'http://winery.opentosca.org/test/nodetypes/fruits\' ' +
          'xmlns:selfservice=\'http://www.eclipse.org/winery/model/selfservice\' ' +
          'xmlns:tosca=\'http://docs.oasis-open.org/tosca/ns/2011/12\' ' +
          'xmlns:ty=\'http://winery.opentosca.org/test/nodetypes/fruits\' ' +
          'xmlns:wfn=\'http://winery.opentosca.org/test/nodetypes/fruits\' ' +
          'xmlns:winery=\'http://www.opentosca.org/winery/extensions/tosca/2013/02/12\'>' +
          '<ty:Antioxidants/><ty:VitaminC/><ty:Potassium/><ty:Superfood/>' +
          '<ty:HarvestedAt/>\n\t\t\t</wfn:BaobabProperties>'
        },
        'id': 'baobab',
        'type': '{http://winery.opentosca.org/test/nodetypes/fruits}baobab',
        'name': 'baobab',
        'minInstances': 1,
        'maxInstances': '1'
      },
      {
        'documentation': [],
        'any': [],
        'otherAttributes': {
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}location': 'undefined',
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}x': '1284',
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}y': '331'
        },
        'properties': {
          'any': '<?xml version=\'1.0\' encoding=\'UTF-16\'?>\n<wfn:OrangeProperties ' +
          'xmlns=\'http://winery.opentosca.org/test/nodetypes/fruits\' ' +
          'xmlns:selfservice=\'http://www.eclipse.org/winery/model/selfservice\' ' +
          'xmlns:tosca=\'http://docs.oasis-open.org/tosca/ns/2011/12\' ' +
          'xmlns:ty=\'http://winery.opentosca.org/test/nodetypes/fruits\' ' +
          'xmlns:wfn=\'http://winery.opentosca.org/test/nodetypes/fruits\' ' +
          'xmlns:winery=\'http://www.opentosca.org/winery/extensions/tosca/2013/02/12\'>' +
          '<ty:Antioxidants/><ty:VitaminC/><ty:Potassium/><ty:Superfood/>' +
          '<ty:HarvestedAt/>\n\t\t\t</wfn:OrangeProperties>'
        },
        'id': 'orange',
        'type': '{http://winery.opentosca.org/test/nodetypes/fruits}orange',
        'name': 'orange',
        'minInstances': 1,
        'maxInstances': '1'
      },
      {
        'documentation': [],
        'any': [],
        'otherAttributes': {
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}location': 'undefined',
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}x': '1599',
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}y': '329'
        },
        'properties': {
          'any': '<?xml version=\'1.0\' encoding=\'UTF-16\'?>\n<wfn:OrangeProperties ' +
          'xmlns=\'http://winery.opentosca.org/test/nodetypes/fruits\' ' +
          'xmlns:selfservice=\'http://www.eclipse.org/winery/model/selfservice\' ' +
          'xmlns:tosca=\'http://docs.oasis-open.org/tosca/ns/2011/12\' ' +
          'xmlns:ty=\'http://winery.opentosca.org/test/nodetypes/fruits\' ' +
          'xmlns:wfn=\'http://winery.opentosca.org/test/nodetypes/fruits\' ' +
          'xmlns:winery=\'http://www.opentosca.org/winery/extensions/tosca/2013/02/12\'>' +
          '<ty:Antioxidants/><ty:VitaminC/><ty:Potassium/><ty:Superfood/>' +
          '<ty:HarvestedAt/>\n\t\t\t</wfn:OrangeProperties>'
        },
        'id': 'orange_2',
        'type': '{http://winery.opentosca.org/test/nodetypes/fruits}orange',
        'name': 'orange_3',
        'minInstances': 1,
        'maxInstances': '1'
      },
      {
        'documentation': [],
        'any': [],
        'otherAttributes': {
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}location': 'undefined',
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}x': '606',
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}y': '219'
        },
        'properties': {
          'any': '<?xml version=\'1.0\' encoding=\'UTF-16\'?>\n<wfn:BaobabProperties ' +
          'xmlns=\'http://winery.opentosca.org/test/nodetypes/fruits\' ' +
          'xmlns:selfservice=\'http://www.eclipse.org/winery/model/selfservice\' ' +
          'xmlns:tosca=\'http://docs.oasis-open.org/tosca/ns/2011/12\' ' +
          'xmlns:ty=\'http://winery.opentosca.org/test/nodetypes/fruits\' ' +
          'xmlns:wfn=\'http://winery.opentosca.org/test/nodetypes/fruits\' ' +
          'xmlns:winery=\'http://www.opentosca.org/winery/extensions/tosca/2013/02/12\'>' +
          '<ty:Antioxidants/><ty:VitaminC/><ty:Potassium/><ty:Superfood/>' +
          '<ty:HarvestedAt/>\n\t\t\t</wfn:BaobabProperties>'
        },
        'id': 'baobab_2',
        'type': '{http://winery.opentosca.org/test/nodetypes/fruits}baobab',
        'name': 'baobab_3',
        'minInstances': 1,
        'maxInstances': '1'
      },
      {
        'documentation': [],
        'any': [],
        'otherAttributes': {
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}location': 'undefined',
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}x': '900',
          '{http://www.opentosca.org/winery/extensions/tosca/2013/02/12}y': '325'
        },
        'properties': {
          'any': '<?xml version=\'1.0\' encoding=\'UTF-16\'?>\n<wfn:BaobabProperties ' +
          'xmlns=\'http://winery.opentosca.org/test/nodetypes/fruits\' ' +
          'xmlns:selfservice=\'http://www.eclipse.org/winery/model/selfservice\' ' +
          'xmlns:tosca=\'http://docs.oasis-open.org/tosca/ns/2011/12\' ' +
          'xmlns:ty=\'http://winery.opentosca.org/test/nodetypes/fruits\' ' +
          'xmlns:wfn=\'http://winery.opentosca.org/test/nodetypes/fruits\' ' +
          'xmlns:winery=\'http://www.opentosca.org/winery/extensions/tosca/2013/02/12\'>' +
          '<ty:Antioxidants/><ty:VitaminC/><ty:Potassium/><ty:Superfood/>' +
          '<ty:HarvestedAt/>\n\t\t\t</wfn:BaobabProperties>'
        },
        'id': 'baobab_3',
        'type': '{http://winery.opentosca.org/test/nodetypes/fruits}baobab',
        'name': 'baobab_4',
        'minInstances': 1,
        'maxInstances': '1'
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

  constructor() {
    for (const el of this.visuals) {
      const singleQName = new QName(el.nodeTypeId);
      const singleLocalName = singleQName.localName;
      el.localName = singleLocalName;
    }
  }

}

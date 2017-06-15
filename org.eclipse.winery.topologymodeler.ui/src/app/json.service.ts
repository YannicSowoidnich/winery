import { Injectable } from '@angular/core';

@Injectable()
export class JsonService {
  testJson = {
    'nodeTemplates': [
      {
        'id': 'plantage',
        color: '#FFE4C4'
      },
      {
        'id': 'tree',
        color: '#F5F5DC'
      },
      {
        'id': 'tree_2',
        color: '#F0FFFF'
      },
      {
        'id': 'baobab',
        color: '#FFEBCD'
      },
      {
        'id': 'orange',
        color: '#FF7F50'
      },
      {
        'id': 'orange_2',
        color: '#0000FF'
      },
      {
        'id': 'baobab_2',
        color: '#8A2BE2'
      },
      {
        'id': 'baobab_3',
        color: '#A52A2A'
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

  constructor() { }

}

/**
 * Copyright (c) 2017 University of Stuttgart.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and the Apache License 2.0 which both accompany this distribution,
 * and are available at http://www.eclipse.org/legal/epl-v10.html
 * and http://www.apache.org/licenses/LICENSE-2.0
 *
 * Contributors:
 *     Josip Ledic - initial API and implementation
 */
import {
  Component, EventEmitter, Input, OnInit, Output,
  ViewContainerRef
} from '@angular/core';
import { WineryAlertService } from '../winery-alert/winery-alert.service';
import { JsonService } from '../jsonService/json.service';
import { Visuals } from '../ttopology-template';

@Component({
  selector: 'app-topology-renderer',
  templateUrl: './topology-renderer.component.html',
  styleUrls: ['./topology-renderer.component.css']
})
export class TopologyRendererComponent implements OnInit {

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
          x: 600,
          y: 49
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
          x: 600,
          y: 267
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
          x: 600,
          y: 585
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
          x: 958,
          y: 594
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
          y: 564
        },
        id: 'mango',
        type: '{http://winery.opentosca.org/test/nodetypes/fruits}mango',
        name: 'mango',
        minInstances: 1,
        maxInstances: 1
      }
    ],
    relationshipTemplates: [
      {
        'sourceElement': 'baobab',
        'targetElement': 'tree'
      },
      {
        'sourceElement': 'banana',
        'targetElement': 'tree'
      },
      {
        'sourceElement': 'mango',
        'targetElement': 'tree'
      },
      {
        'sourceElement': 'tree',
        'targetElement': 'plantage'
      }
    ]
  };

  testVisuals = [
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
      nodeTypeId: '{http://winery.opentosca.org/test/ponyuniverse}banana',
      localName: ''
    }
  ];

  @Input() topologyTemplate: any;
  @Input() visuals: Visuals[] = [new Visuals('red', 'apple', 'apple', 'abc')];
  pressedNavBarButton: any;

  constructor(vcr: ViewContainerRef, private notify: WineryAlertService,
              private jsonService: JsonService) {
    this.notify.init(vcr);
  }

  ngOnInit() {
    this.jsonService.setVisuals(this.visuals);
    this.jsonService.setTopologyTemplate(this.topologyTemplate);
  }

  sendPressedNavBarButtonToCanvas($event): void {
    this.pressedNavBarButton = $event;
  }
}

/**
 * Copyright (c) 2017 ZTE Corporation.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and the Apache License 2.0 which both accompany this distribution,
 * and are available at http://www.eclipse.org/legal/epl-v10.html
 * and http://www.apache.org/licenses/LICENSE-2.0
 *
 * Contributors:
 *     ZTE - initial API and implementation and/or initial documentation
 */

import {Injectable} from '@angular/core';
import {jsPlumb} from 'jsplumb/dist/js/jsplumb.js';
import {WorkflowNode} from '../model/workflow.node';
import {BroadcastService} from './broadcast.service';
import {ModelService} from './model.service';

/**
 * JsPlumbService
 * provides all of the operations about jsplumb plugin.
 */
@Injectable()
export class JsPlumbService {

  public jsplumbInstance: any;

  constructor(private broadcastService: BroadcastService,
              private modelService: ModelService) {
  }

  public connectNode() {
    this.modelService.getNodes()
      .forEach(node => node.connection
        .forEach(target => this.jsplumbInstance.connect({source: node.id, target})));
  }

  public initJsPlumbInstance() {
    console.log('init jsplumb instance start');
    const jsplumbService = this;

    jsPlumb.ready(() => {
      jsplumbService.jsplumbInstance = jsPlumb.getInstance();

      jsplumbService.jsplumbInstance.importDefaults({
        Anchor: ['Top', 'RightMiddle', 'LeftMiddle', 'Bottom'],
        Connector: [
          'Flowchart',
          {cornerRadius: 0, stub: 0, gap: 3},
        ],
        ConnectionOverlays: [
          [
            'Arrow',
            {direction: 1, foldback: 1, location: 1, width: 10, length: 10},
          ],
          ['Label', {label: '', id: 'label', cssClass: 'aLabel'}],
        ],
        connectorPaintStyle: {
          lineWidth: 2,
        },
        Endpoint: 'Blank',
        PaintStyle: {lineWidth: 1},
      });

      jsplumbService.broadcastService.broadcast(jsplumbService.broadcastService.jsPlumbInstance,
        jsplumbService.jsplumbInstance);

      // add connection to model data while a new connection is build
      jsplumbService.jsplumbInstance.bind('connection', info => {
        jsplumbService.modelService.addConnection(info.connection.sourceId, info.connection.targetId);

        info.connection.bind('click', connection => {
          jsplumbService.modelService.deleteConnection(connection.sourceId, connection.targetId);
          jsPlumb.detach(connection);
        });
      });
    });
  }

  public initNode(node: WorkflowNode) {

    this.jsplumbInstance.draggable(node.id, {
      stop(event) {
        node.position.left = event.pos[0];
        node.position.top = event.pos[1];
      },
    });

    this.jsplumbInstance.makeTarget(node.id, {
      detachable: false,
      isTarget: true,
      maxConnections: -1,
    });

    this.jsplumbInstance.makeSource(node.id, {
      filter: '.anchor, .anchor *',
      detachable: false,
      isSource: true,
      maxConnections: -1,
    });

  }

  public buttonDraggable() {
    const selector = this.jsplumbInstance.getSelector('.toolbar .item');
    this.jsplumbInstance.draggable(selector,
      {
        scope: 'btn',
        clone: true,
      });
  }

  public buttonDroppable() {
    const jsplumbService = this;
    const selector = this.jsplumbInstance.getSelector('.canvas');
    this.jsplumbInstance.droppable(selector, {
      scope: 'btn',
      drop(ev) {
        const el = jsplumbService.jsplumbInstance.getSelector(ev.drag.el);
        const type = el.attributes.nodeType.value;
        const left = ev.e.clientX - ev.drop.position[0];
        const top = ev.e.clientY - ev.drop.position[1];

        jsplumbService.modelService.addNode(type, type, left, top);
      },
    });
  }

  public remove(nodeId: string) {
    this.jsplumbInstance.remove(nodeId);
  }

}

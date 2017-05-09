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

import { Injectable } from '@angular/core';
import {isNullOrUndefined} from 'util';
import { WorkflowNode } from '../model/workflow.node';
import { BroadcastService } from './broadcast.service';

/**
 * ModelService
 * provides all operations about plan model.
 */
@Injectable()
export class ModelService {
  private nodes: WorkflowNode[] = [];

  constructor(private broadcastService: BroadcastService) {
    this.broadcastService.planModel$.subscribe(planNodes =>
      planNodes.forEach(node => this.nodes.push(new WorkflowNode(node))));
  }

  public getNodes(): WorkflowNode[] {
    return this.nodes;
  }

  public addNode(name: string, type: string, left: number, top: number) {
    this.nodes.push(new WorkflowNode({
      id: this.createId(),
      name,
      type,
      position: {
        left,
        top,
      },
    }));
  }

  public deleteNode(nodeId: string) {
    // delete related connections
    this.nodes.forEach(node => node.deleteConnection(nodeId));

    // delete current node
    const index = this.nodes.findIndex(node => node.id === nodeId);
    if (index !== -1) {
      this.nodes.splice(index, 1);
    }
  }

  public addConnection(sourceId: string, targetId: string) {
    const node = this.nodes.find(tmpNode => tmpNode.id === sourceId);
    if (!isNullOrUndefined(node)) {
      node.addConnection(targetId);
    }
  }

  public deleteConnection(sourceId: string, targetId: string) {
    const node = this.nodes.find(tmpNode => tmpNode.id === sourceId);
    if (!isNullOrUndefined(node)) {
      node.deleteConnection(targetId);
    }
  }

  public save() {
    console.log('****************** save data *********************');
    console.log(this.nodes);
    this.broadcastService.broadcast(this.broadcastService.saveEvent, JSON.stringify(this.nodes));
  }

  private createId() {
    const idSet = new Set();
    this.nodes.forEach(node => idSet.add(node.id));

    for (let i = 0; i < idSet.size; i++) {
      if (!idSet.has('node' + i)) {
        return 'node' + i;
      }
    }

    return 'node' + idSet.size;
  }
}

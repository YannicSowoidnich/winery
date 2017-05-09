/**
 * Created by ThommyZ on 08.05.2017.
 */
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

export const WorkflowNodeType = [
  'StartEvent',
  'EndEvent',
  'ToscaNodeManagementTask',
  'ExclusiveGateway',
  'ParallelGateway',
];

export class WorkflowNode {
  public id: string;
  public name: string;
  public type: string;
  public input: any[];
  public output: any[];
  public connection: any[];
  public template: any;
  public position: any;

  public nodeInterface: string;
  public nodeTemplate: string;
  public nodeOperation: string;

  constructor({
                id, name, type,
                position = {},
                input = [],
                connection = [],
                output = [],
                template = {},
                interface: nodeInterface = '',
                node_operation: nodeOperation = '',
                node_template: nodeTemplate = '',
              }) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.position = position;
    this.input = input;
    this.connection = connection;
    this.output = output;
    this.template = template;
    this.nodeInterface = nodeInterface;
    this.nodeOperation = nodeOperation;
    this.nodeTemplate = nodeTemplate;
  }

  public addConnection(targetId: string) {
    if (!this.connection.includes(targetId)) {
      this.connection.push(targetId);
    }
  }

  public deleteConnection(targetId: string) {
    const index = this.connection.findIndex(target => target === targetId);
    if (index !== -1) {
      this.connection.splice(index, 1);
    }
  }

  public toJSON() {
    const target = Object.assign({node_template: '', node_operation: '', interface: ''}, this);

    target.node_template = this.nodeTemplate;
    target.node_operation = this.nodeOperation;
    target.interface = this.nodeInterface;

    delete target.nodeTemplate;
    delete target.nodeOperation;
    delete target.nodeInterface;
    return target;
  }

}

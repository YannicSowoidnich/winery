/**
 * Created by ThommyZ on 08.05.2017.
 */
/*******************************************************************************
 * Copyright (c) 2017 ZTE Corporation.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and the Apache License 2.0 which both accompany this distribution,
 * and are available at http://www.eclipse.org/legal/epl-v10.html
 * and http://www.apache.org/licenses/LICENSE-2.0
 *
 * Contributors:
 *     ZTE - initial API and implementation and/or initial documentation
 *******************************************************************************/
import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class BroadcastService {

  /**
   * broadcast datas
   * this method will catch the exceptions for
   * @param sub
   * @param data
   */
  broadcast(sub:any, data:any) {
    try {
      sub.next(data);
    } catch (err) {
      console.error(err);
    }
  }

  jsPlumbInstance = new Subject<any>();
  jsPlumbInstance$ = this.jsPlumbInstance.asObservable();

  showProperty = new Subject<any>();
  showProperty$ = this.showProperty.asObservable();

  planModel = new Subject<any>();
  planModel$ = this.planModel.asObservable();

  saveEvent = new Subject<any>();
  saveEvent$ = this.saveEvent.asObservable();

  nodeProperty = new Subject<any>();
  nodeProperty$ = this.nodeProperty.asObservable();

  nodeTemplates = new Subject<any>();
  nodeTemplates$ = this.nodeTemplates.asObservable();

  nodeInterfaces = new Subject<any>();
  nodeInterfaces$ = this.nodeInterfaces.asObservable();

  nodeOperations = new Subject<any>();
  nodeOperations$ = this.nodeOperations.asObservable();

  nodeParameters = new Subject<any>();
  nodeParameters$ = this.nodeParameters.asObservable();
}

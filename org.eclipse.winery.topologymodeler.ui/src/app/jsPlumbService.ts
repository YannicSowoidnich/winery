/**
 * Created by ThommyZ on 31.05.2017.
 */
import { Injectable } from '@angular/core';

declare const jsPlumb: any;

@Injectable()
export class JsPlumbService {

  getJsPlumbInstance(): any {
    jsPlumb.ready(() => {
    });
    return jsPlumb.getInstance({
      PaintStyle: {
        strokeWidth: 2,
        stroke: 'rgba(200,0,0,0.5)',
      }
      ,
      Connector: ['StateMachine'],
      Endpoints: [
        ['Blank', {radius: 0}], ['Blank', {radius: 0}]],
      ConnectionsDetachable: false,
      Anchor: 'Continuous'
    });
  }
}

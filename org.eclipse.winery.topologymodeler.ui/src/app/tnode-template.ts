export class TNodeTemplate {

  constructor (public documentation: any,
               public any: any,
               public otherAttributes: any,
               public properties: any,
               public id: string,
               public type: any,
               public name: string,
               public minInstances: number,
               public maxInstances: number) { }
}

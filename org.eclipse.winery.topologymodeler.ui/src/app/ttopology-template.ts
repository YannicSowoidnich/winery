export class AbstractTTemplate {
  constructor(private _documentation?: any,
              private _any?: any,
              private _otherAttributes?: any) {
  }
}

export class TTopologyTemplate extends AbstractTTemplate {
  nodeTemplates: TNodeTemplate[];
  relationshipTemplates: TRelationshipTemplate[];
}

export class TNodeTemplate extends AbstractTTemplate {
  constructor(private _properties: any,
              private _id: string,
              private _type: string,
              private _minInstances: number,
              private _maxInstances: number,
              documentation?: any,
              any?: any,
              otherAttributes?: any) {
    super(documentation, any, otherAttributes);
  }
}

export class TRelationshipTemplate extends AbstractTTemplate {
  name?: string;
  id?: string;
  type?: any;
  sourceElement: string;
  targetElement: string;
  constructor(private _sourceElement: string,
              private _targetElement: string,
              private _name: string,
              private _id: string,
              private _type: any,
              documentation?: any,
              any?: any,
              otherAttributes?: any) {
    super(documentation, any, otherAttributes);
  }
}

export class Visuals {
  constructor(private _color: string,
              private _nodeTypeId: string,
              private _localName,
              private _imageUrl) {
  }
}

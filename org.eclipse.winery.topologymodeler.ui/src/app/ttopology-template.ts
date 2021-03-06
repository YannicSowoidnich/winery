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
  get targetElement(): string {
    return this._targetElement;
  }
  get sourceElement(): string {
    return this._sourceElement;
  }
  constructor(private _sourceElement: string,
              private _targetElement: string,
              private _name?: string,
              private _id?: string,
              private _type?: any,
              documentation?: any,
              any?: any,
              otherAttributes?: any) {
    super(documentation, any, otherAttributes);
  }

}

export class Visuals {

  constructor(private _color: string,
              private _nodeTypeId: string,
              private _localName?: string,
              private _imageUrl?: string) {
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get nodeTypeId(): string {
    return this._nodeTypeId;
  }

  set nodeTypeId(value: string) {
    this._nodeTypeId = value;
  }

  get localName(): string {
    this._localName = this._nodeTypeId.split('}')[1];
    return this._localName;
  }

  set localName(value: string) {
    this._localName = value;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }
}

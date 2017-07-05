export class AbstractTTemplate {
  documentation?: any;
  any?: any;
  otherAttributes?: any;
}

export class TTopologyTemplate extends AbstractTTemplate {
  nodeTemplates: TNodeTemplate[];
  relationshipTemplates: TRelationshipTemplate[];
}

export class TNodeTemplate extends AbstractTTemplate {
  properties?: any;
  id: string;
  type: any;
  name: string;
  minInstances: number;
  maxInstances: number;
}

export class TRelationshipTemplate extends AbstractTTemplate {
  name?: string;
  id?: string;
  type?: any;
  sourceElement: string;
  targetElement: string;
}

export class Visuals {
  imageUrl?: string;
  color: string;
  nodeTypeId: string;
  localName: string;
}

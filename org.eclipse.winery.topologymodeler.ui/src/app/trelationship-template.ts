export class TRelationshipTemplate {
  name: string;
  id: string;
  documentation: any;
  otherAttributes: any;
  type: any;

  constructor(public sourceElement: string,
              public targetElement: string) { }
}

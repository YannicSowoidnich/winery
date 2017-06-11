export class TNodeTemplate {
  name: string;
  id: string;
  documentation: any;
  otherAttributes: any;
  type: any;
  minInstances: number;
  maxInstances: number;

  constructor (id: string) {
    this.id = id;
  }
}

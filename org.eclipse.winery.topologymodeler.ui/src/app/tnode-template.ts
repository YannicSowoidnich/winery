export class TNodeTemplate {

  private _name: string;
  private _id: string;
  private _documentation: any;
  private _otherAttributes: any;
  private _type: any;
  private _minInstances: number;
  private _maxInstances: number;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get documentation(): any {
    return this._documentation;
  }

  set documentation(value: any) {
    this._documentation = value;
  }

  get otherAttributes(): any {
    return this._otherAttributes;
  }

  set otherAttributes(value: any) {
    this._otherAttributes = value;
  }

  get type(): any {
    return this._type;
  }

  set type(value: any) {
    this._type = value;
  }

  get minInstances(): number {
    return this._minInstances;
  }

  set minInstances(value: number) {
    this._minInstances = value;
  }

  get maxInstances(): number {
    return this._maxInstances;
  }

  set maxInstances(value: number) {
    this._maxInstances = value;
  }
}

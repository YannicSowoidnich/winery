export class QName {
  private _localName: string;
  private _nameSpace: string;

  get localName(): string {
    return this._localName;
  }

  set localName(value: string) {
    this._localName = value;
  }

  get nameSpace(): string {
    return this._nameSpace;
  }

  set nameSpace(value: string) {
    this._nameSpace = value;
  }
}

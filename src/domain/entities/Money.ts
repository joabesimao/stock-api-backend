export class Money {
  private _value: number;

  constructor(value: number) {
    this._value = Math.round(value * 100);
  }

  public getValue(): number {
    return this._value / 100;
  }
}

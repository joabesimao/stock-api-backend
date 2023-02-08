import { Money } from './Money';
import { Stock } from './Stock';

export class Position implements Stock {
  constructor(
    private _stock: Stock,
    private _quantity: number,
    public _id: string,
    public _name: string,
    public _valueStock: Money
  ) {}

  public get quantity(): number {
    return this._quantity;
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  public get stock(): Stock {
    return this._stock;
  }
  public set stock(value: Stock) {
    this._stock = value;
  }

  showIdENameStock(): string {
    return `${this._id} , ${this._name}`;
  }
  showValueStock(): Money {
    return this._valueStock;
  }
}

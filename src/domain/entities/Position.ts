import { Stock } from './Stock';

export class Position {
  constructor(private _stock: Stock, private _quantity: number) {}
  public get quantity(): number {
    return this._quantity;
  }

  public get stock(): Stock {
    return this._stock;
  }
}

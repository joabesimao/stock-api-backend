import { Money } from './Money';

export interface Stock {
  _id: string;
  _name: string;
  _valueStock: Money;

  show(): void;
}

import { Client } from './Client';

import { Position } from './Position';

export class Wallet {
  constructor(private _client: Client, private _positions: Position[]) {}

  private _listPosition: Position[] = [];

  public get client(): Client {
    return this._client;
  }
  public get positions(): Position[] {
    return this._positions;
  }

  addPosition(_position: Position) {
    this._listPosition.push(_position);
  }
  listOfPosition(): readonly Position[] {
    return this._listPosition;
  }
}

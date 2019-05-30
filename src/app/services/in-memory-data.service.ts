import { Injectable } from '@angular/core';
import { teams, players } from '../data/data';
import { Team, Player } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    return { teams, players };
  }

  genId<T extends Team | Player >(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }

}

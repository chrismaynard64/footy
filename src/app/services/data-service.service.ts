import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team, Player } from '../model/team';
import { Subject, ReplaySubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  rootUrl = 'api/';

  constructor(private http: HttpClient) { }

  teams: Team[] = [];
  players: Player[] = [];
  
  teamsSubject = new ReplaySubject<Team[]>();
  playersSubject = new ReplaySubject<Player[]>();


  init() {
    this.http.get<Team[]>(this.rootUrl + 'teams').subscribe( t => {
      this.teams = t;
      this.teamsSubject.next(this.teams);
    });

      this.http.get<Player[]>(this.rootUrl + 'players').subscribe(p => {
        this.players = p;
        this.playersSubject.next(this.players)
      });
    

  }


  getTeams() {
    return this.teamsSubject;
  }

  getPlayers() {
    return this.playersSubject;
  }


  setTeams(teams: Team[]) {
      this.teams = teams;
  }


  setPlayers(players: Player[]) {
      this.players = players;
  }

  getPlayer(id: number) {
      return this.players.find(p => p.id == id);
  }


}

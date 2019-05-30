import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { Team } from '../model/team';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

 teams: Team[] = [];
 teamSub: Subscription;

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.dataService.getTeams().subscribe(teams => {
        this.teams = teams;
    });
  }

ngOnDestroy() {
  if (this.teamSub)
    this.teamSub.unsubscribe();
}

}

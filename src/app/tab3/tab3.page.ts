import { Component } from '@angular/core';
import { Player } from '../model/team';
import { Subscription } from 'rxjs';
import { DataServiceService } from '../services/data-service.service';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  players: Player[] = [];
  playerSub: Subscription;
 
   constructor(public navCtrl: NavController,
    private dataService: DataServiceService) {}
 
   ngOnInit() {
     this.dataService.getPlayers().subscribe(players => {
         this.players = players;
     });
   }
 
 ngOnDestroy() {
   if (this.playerSub)
     this.playerSub.unsubscribe();
 }
 
 showPlayer() {
 
}



}

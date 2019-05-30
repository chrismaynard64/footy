import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../model/team';
import { DataServiceService } from '../services/data-service.service';
import {Location} from '@angular/common';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {


  playerId: number;

  player: Player;
  prev: number = -1;
  next: number = 0;

  constructor(private dataService: DataServiceService, private route: ActivatedRoute, 
    private router: Router, private _location: Location) {

  }  
  
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params && params.id) {
          this.player = this.dataService.getPlayer( params.id);
          console.log('player:' + this.player.lname);

          this.dataService.getPlayers().subscribe(players => {
            
            let prev1 = 0;
            let justgotit = false;

            let i = 0;
            for (let i = 0; i < players.length; i++) {
                let p = players[i]
   
                if (this.prev != -1) {
                  this.next = p.id;

                  break;
                }

                if (p.id == this.player.id)  {
                    this.prev = prev1;

                }
                prev1 = p.id;
            }
            
        });
      }
    });
  }

  goBack() {
    this.router.navigate(['/tabs', 'tab3']);
  }

  go(p) {
      this.router.navigate(['/player', p]);
  }

}

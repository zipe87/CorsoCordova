import { Component } from '@angular/core';

import { NavController} from 'ionic-angular';

import { SaintDetailPage } from '../saint-detail/saint-detail';

import { SantiService } from '../../providers/santi-service';

import { Santo } from '../../models/santo';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [SantiService]
})
export class AboutPage {
  santi: Santo[];
  constructor(public navCtrl: NavController, public serv: SantiService) {
    this.santi = [];

    serv.load().then(dati => {
      console.log(dati);
      this.santi = dati;
    });
  }

  saintSelected(santo) {
    this.navCtrl.push(SaintDetailPage,{santo: santo});
  }

}

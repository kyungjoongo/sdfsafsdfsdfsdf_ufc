import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";

/**
 * Generated class for the OtagonGirlsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otagon-girls-detail',
  templateUrl: 'otagon-girls-detail.html',
})
export class OtagonGirlsDetailPage {
    result : any;
    id : string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider: HttpProvider) {




        this.id = navParams.get("id");



        this.httpProvider.getOctagonGirlDetailData(this.id ).subscribe(response => {
            this.result = response;
        });
    }


    ionViewDidLoad() {
    console.log('ionViewDidLoad OtagonGirlsDetailPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OtagonGirlsDetailPage} from "../otagon-girls-detail/otagon-girls-detail";
import {HttpProvider} from "../../providers/http/http";
import {HttpClient} from "@angular/common/http";
import {FightCard2Page} from "../fight-card2/fight-card2";

/**
 * Generated class for the FightEventListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fight-event-list',
  templateUrl: 'fight-event-list.html',
})
export class FightEventListPage {

    results: any =[];
    title : string ;
    detailPage : OtagonGirlsDetailPage;

    constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider: HttpProvider
        , public httpclient : HttpClient
    ) {

        this.httpclient.get('http://nodejs-191113.appspot.com/event_list').subscribe((res:any)=>{

            console.log('#####################' + JSON.stringify(res.result));
            this.results = res.result;

        })
    }
    clickedEvent(item){
        this.navCtrl.push(FightCard2Page, {
            url : item.url,
            title : item.title
        });
    }

}

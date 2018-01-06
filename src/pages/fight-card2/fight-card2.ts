import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {OtagonGirlsDetailPage} from "../otagon-girls-detail/otagon-girls-detail";
import {HttpProvider} from "../../providers/http/http";
import {HttpClient} from "@angular/common/http";
import {InAppBrowser} from "@ionic-native/in-app-browser";


@IonicPage()
@Component({
    selector: 'page-fight-card2',
    templateUrl: 'fight-card2.html',
})
export class FightCard2Page {

    results: any = [];
    title: string;
    detailPage: OtagonGirlsDetailPage;

    constructor(public navCtrl: NavController, public navParams: NavParams
        , public httpProvider: HttpProvider
        , private   iab: InAppBrowser
        , public loadingCtrl: LoadingController
        , public httpclient: HttpClient) {

        let title = this.navParams.get('title');
        let url = this.navParams.get('url');
        let loading = this.loadingCtrl.create({
            content: 'Please wait...',
            spinner: 'dots'
        });
        loading.present().then(() => {

            this.httpclient.get('http://nodejs-191113.appspot.com/fightcard_detail2/' + title).subscribe((res: any) => {

                console.log('#####################' + JSON.stringify(res.result[0].fight_images));
                this.results = res.result[0].fight_images;
                this.title = res.result[0].title;
                loading.dismiss();

            })
        });

    }

    goFighterDetail(fighter_fullname) {
        var browser = this.iab.create('http://www.ufc.com/fighter/' + fighter_fullname);
    }


}

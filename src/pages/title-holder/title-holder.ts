import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {HttpClient} from "@angular/common/http";
import {OtagonGirlsDetailPage} from "../otagon-girls-detail/otagon-girls-detail";
import {Constants} from "../../config";

@IonicPage()
@Component({
    selector: 'page-title-holder',
    templateUrl: 'title-holder.html',
})
export class TitleHolderPage {

    results: any = [];
    title: string;

    constructor(public navCtrl: NavController
        , public navParams: NavParams
        , public httpProvider: HttpProvider
        , private   iab: InAppBrowser
        , public loadingCtrl: LoadingController
        , public httpclient: HttpClient) {

        let loading = this.loadingCtrl.create({
            content: 'Please wait...',
            spinner: 'dots'
        });
        loading.present();
        this.httpclient.get('https://nodejs-191113.appspot.com/title_holder').subscribe((res: any) => {

            console.log('#####################' + JSON.stringify(res.result));
            this.results = res.result;
            loading.dismissAll();


        })
    }

    goFighterDetail(fighter_fullname) {


        let fighter_name = fighter_fullname.split(" ");

        let complete_fn = fighter_name[0] + "-" + fighter_name[1]

        var browser = this.iab.create('http://www.ufc.com/fighter/' + complete_fn.toLowerCase());
    }

}

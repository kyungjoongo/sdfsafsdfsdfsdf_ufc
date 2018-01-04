import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {OtagonGirlsDetailPage} from "../otagon-girls-detail/otagon-girls-detail";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import { HttpClient} from "@angular/common/http";

/**
 * Generated class for the OctagonGirlsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-octagon-girls',
    templateUrl: 'octagon-girls.html',
})
export class OctagonGirlsPage {
    result: any;
    detailPage: OtagonGirlsDetailPage;

    constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider: HttpProvider
                ,private httpclient : HttpClient
                , private   iab: InAppBrowser) {

        /*'http://ufc-data-api.ufc.com/api/v3/iphone/octagon_girls'*/
       this.httpclient.get('https://ufc-rest2.herokuapp.com/getOctagonGirls').subscribe(response=>{
           console.log(response);
           this.result = response;
       })
    }

    goDetail(fname, lname) {

      //  alert(fname+ "-"+ lname);

        let fullname = fname +  "-"+ lname;

        let url = 'http://www.ufc.com/octagonGirl/' + fullname.toLowerCase();

        var browser = this.iab.create(url);

        /*this.navCtrl.push(OtagonGirlsDetailPage, { id : id});*/
    }


}

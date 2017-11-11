import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {InAppBrowser} from '@ionic-native/in-app-browser';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'


})
export class HomePage {

    result: any;


    constructor(public navCtrl: NavController, public httpProvider: HttpProvider, private   iab: InAppBrowser) {


        this.httpProvider.getJsonData().subscribe(response => {
            this.result = response.result;
        });


    }

    goFightCard(eventId) {
        let browser = this.iab.create('http://ufc-data-api.ufc.com/api/v1/us/events/'+ eventId, '_blank');

    }

}

import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {InAppBrowser} from "@ionic-native/in-app-browser";

/**
 * Generated class for the FightersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-fighters',
    templateUrl: 'fighters.html',
})
export class FightersPage {
    result: any;
    _filteredList = [];
    loadingImgDiv = this.loadingController.create({content: '<ion-spinner></ion-spinner>'});
    searchTerm: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider: HttpProvider
        , private loadingController: LoadingController
        , private   iab: InAppBrowser) {

        //this.getFignters();

    }


    getFignters() {

        this.httpProvider.getFighters().subscribe(response => {
            this.result = response;
        });
    }

    goDetail(id) {

        var browser = this.iab.create('http://ufc-data-api.ufc.com/api/v3/iphone/fighters/' + id, '_blank', 'location=no,toolbar=no');

    }

    setFilteredItems() {

        /* this.result = this.httpProvider.fighterFilterItems(this.searchTerm);*/

        /*  this.result.filter((item) => {

              if (item.last_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
                  this._filteredList.push(item);
              }

          });

          this.result.length = 0;
          this.result = this._filteredList;*/

        //alert(this.searchTerm);


        this.httpProvider.getFightersByName(this.searchTerm).subscribe(response => {
            this.result = response;


        });


    }


}

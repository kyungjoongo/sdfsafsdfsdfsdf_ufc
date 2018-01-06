import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {VideoPlaylist} from "../weight-ins/video-playlist";

/**
 * Generated class for the ChannelListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-channel-list',
    templateUrl: 'channel-list.html',
})
export class ChannelListPage {

    /*weightInsPage : WeightInsPage;*/

    googlePlusClientId: string = '574875960059-mkh0uvtsbe200mtfs63b84kujj6tsj1v.apps.googleusercontent.com';

    channelList: any;

    constructor(public navCtrl: NavController, public navParams: NavParams
        , public loadingCtrl: LoadingController
        , public httpProvider: HttpProvider) {

        let channelId = 'UCvgfXK4nTYKudb0rFR6noLA'; //UFC

        let loading = this.loadingCtrl.create({
            content: 'Please wait...',
            spinner: 'dots'
        });
        loading.present().then(() => {
            this.httpProvider.getPlaylistsForChannel(channelId).subscribe(response => {

                console.log(response);
                this.channelList = response;
                loading.dismissAll();
            });
        });


    }

    openPlaylist(id, title) {
        this.navCtrl.push(VideoPlaylist, {playListId: id, title: title});
    }

}

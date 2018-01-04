import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {YoutubeVideoPlayer} from "@ionic-native/youtube-video-player";
import {InAppBrowser} from "@ionic-native/in-app-browser";

/**
 * Generated class for the WeightInsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-video-playlist',
    templateUrl: 'video-playlist.html',
})
export class VideoPlaylist {

    apiKey: string = 'AIzaSyCUMLRaMiBgIcQiOwR--735jG-Dhgvg8B8';
    playlists: any;
    title: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider: HttpProvider
        , private youtube: YoutubeVideoPlayer, private plt: Platform
        , private   iab: InAppBrowser) {

        var playListId = this.navParams.get("playListId");
        this.title = this.navParams.get("title");
        this.httpProvider.getListVideos(playListId).subscribe(response => {

            this.playlists = response;
            console.log(response);
        })


    }

    isEmptyObject(obj) {
        return (obj && (Object.keys(obj).length === 0));
    }


    openVideo(video) {
        /*  if (this.plt.is('cordova')) {
              this.youtube.openVideo(video.snippet.resourceId.videoId);
          } else {*/
        //window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
        var browser = this.iab.create('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId, '_blank', 'location=no,toolbar=no');
        //}
    }

    /*//

    }*/
}

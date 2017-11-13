import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {HttpModule} from "@angular/http";
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {OctagonGirlsPage} from "../pages/octagon-girls/octagon-girls";
import {OtagonGirlsDetailPage} from "../pages/otagon-girls-detail/otagon-girls-detail";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HttpProvider} from '../providers/http/http';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {VideoPlaylist} from "../pages/weight-ins/video-playlist";
import {ChannelListPage} from "../pages/channel-list/channel-list";
import {FightersPage} from "../pages/fighters/fighters";
import {AdMobPro} from "@ionic-native/admob-pro";

import {YoutubeVideoPlayer} from "@ionic-native/youtube-video-player";


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        OctagonGirlsPage, OtagonGirlsDetailPage,
        VideoPlaylist, ChannelListPage, FightersPage
    ],
    imports: [
        HttpModule,
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        OctagonGirlsPage, OtagonGirlsDetailPage, VideoPlaylist, ChannelListPage, FightersPage
    ],


    providers: [
        StatusBar, YoutubeVideoPlayer,AdMobPro,
        SplashScreen, HttpProvider, InAppBrowser,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
    ]
})
export class AppModule {
}

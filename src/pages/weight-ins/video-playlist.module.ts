import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {VideoPlaylist} from './video-playlist';

@NgModule({
  declarations: [
    VideoPlaylist,
  ],
  imports: [
    IonicPageModule.forChild(VideoPlaylist),
  ],
})
export class VideoPlaylistModule {}

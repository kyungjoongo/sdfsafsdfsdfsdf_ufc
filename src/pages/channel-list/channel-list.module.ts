import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChannelListPage } from './channel-list';

@NgModule({
  declarations: [
    ChannelListPage,
  ],
  imports: [
    IonicPageModule.forChild(ChannelListPage),
  ],
})
export class ChannelListPageModule {}

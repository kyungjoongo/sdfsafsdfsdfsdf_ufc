import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FightEventListPage } from './fight-event-list';

@NgModule({
  declarations: [
    FightEventListPage,
  ],
  imports: [
    IonicPageModule.forChild(FightEventListPage),
  ],
})
export class FightEventListPageModule {}

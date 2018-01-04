import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FightersPage } from './fighters';

@NgModule({
  declarations: [
    FightersPage,
  ],
  imports: [
    IonicPageModule.forChild(FightersPage),
  ],
})
export class FightersPageModule {}

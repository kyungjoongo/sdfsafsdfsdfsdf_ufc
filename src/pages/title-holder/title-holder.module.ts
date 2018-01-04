import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TitleHolderPage } from './title-holder';

@NgModule({
  declarations: [
    TitleHolderPage,
  ],
  imports: [
    IonicPageModule.forChild(TitleHolderPage),
  ],
})
export class TitleHolderPageModule {}

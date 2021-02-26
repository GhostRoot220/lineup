import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account.page';
import { ModalModule } from 'src/app/page/modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalModule,
    RouterModule.forChild([{ path: '', component: AccountPage }])
  ],
  declarations: [AccountPage]
})
export class AccountPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';

import { MessageboxComponent } from '../component/messagebox/messagebox.component';

@NgModule({
  declarations: [MessageboxComponent],
  imports: [
    CommonModule,
    PipesModule,
    IonicModule.forRoot()
  ],
  exports: [MessageboxComponent]
})
export class ComponentModule { }

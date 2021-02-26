import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectionPipe } from './direction/direction.pipe';
import { FTOCPipe } from './temperature/FTOC/ftoc.pipe';
import { TimePipe } from './time/time.pipe';
import { MillitotimePipe } from './millitotime/millitotime.pipe';
import { MtofPipe } from './mtof/mtof.pipe';
import { NumbertoiconPipe } from './numbertoicon/numbertoicon.pipe';
import { RoundPipe } from './number/round/round.pipe';
import { FormatnamePipe } from './name/formatname/formatname.pipe';
import { SecurefilePipe } from './file/securefile/securefile.pipe';

@NgModule({
  declarations: [DirectionPipe, FTOCPipe, TimePipe, MillitotimePipe, MtofPipe, NumbertoiconPipe, RoundPipe, FormatnamePipe, SecurefilePipe],
  imports: [
    CommonModule
  ],
  exports: [
    DirectionPipe,
    FTOCPipe,
    TimePipe,
    MillitotimePipe,
    MtofPipe,
    NumbertoiconPipe,
    RoundPipe,
    FormatnamePipe,
    SecurefilePipe
  ]
})
export class PipesModule { }

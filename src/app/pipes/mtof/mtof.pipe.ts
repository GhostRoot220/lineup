import { Pipe, PipeTransform } from '@angular/core';
import { MTOFRATIO } from 'src/app/constants/constants';

@Pipe({
  name: 'mtof'
})
export class MtofPipe implements PipeTransform {

  transform(value: any): any {
    let result = MTOFRATIO * value;
    return Math.round(result);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    /**
     * args: ishalfRound
     *  true: Half round
     *  false: not half
     */
    let result = ""
    if(args == true) {
      result = (Math.round(value*2)/2).toString();
    } else {
      result = Math.round(value).toString();
    }
    return result;
  }

}

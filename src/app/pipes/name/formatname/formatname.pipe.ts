import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatname'
})
export class FormatnamePipe implements PipeTransform {

  transform(value: any): any {
    let result = "";

    if(value != "") {
      let arrTmpName = value.trim().split(" ");
      if(arrTmpName.length > 0) {
        result = arrTmpName[0] + " " + arrTmpName[1].substring(0, 1);
      } else {
        result = arrTmpName[0];
      }
    }
    return result;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any): any {
    let convertedTime = "";
    let tmpDate = new Date(value);
    convertedTime = tmpDate.getFullYear() + "/" + (tmpDate.getMonth() + 1) + "/" + ('0' + tmpDate.getDate()).slice(-2);
    return convertedTime;
  }

}

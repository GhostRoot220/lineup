import { Pipe, PipeTransform } from '@angular/core';
import { MyutilsService } from 'src/app/services/myutils/myutils.service';
import * as moment from 'moment-timezone';

@Pipe({
  name: 'millitotime'
})
export class MillitotimePipe implements PipeTransform {

  constructor(private myUtils: MyutilsService) {}

  transform(value: number, args: boolean, location: any, toLocal: boolean): any {
    let result = "";
    // if(location !== null && location !== undefined) {
      // if(toLocal == true) {
        let d = new Date(value);

        let minVal: any = d.getMinutes();
        minVal = minVal < 10 ? '0' + minVal : minVal;

        let hourVal = d.getHours();
        var ampm = hourVal >= 12 ? 'pm' : 'am';
        hourVal = hourVal % 12;
        hourVal = hourVal ? hourVal : 12;

        let dayVal = d.getDate();
        let monVal = d.getMonth() + 1;
        let yearVal = d.getFullYear();

        if(args == true) {
          result = monVal + "/" + dayVal + "/" + yearVal+ " " + hourVal + ":" + minVal + " " + ampm;
        } else {
          result = hourVal + ":" + minVal + " " + ampm;
        }
      // } else {
      //   const timeZone = this.myUtils.getTimeZoneName(location);
      //   result = moment.tz(value, timeZone).format('hh:mm A');
      // }
    // }
    return result;
  }

}

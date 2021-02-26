import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fTOC'
})
export class FTOCPipe implements PipeTransform {

  transform(value: any): any {
    let result = "";
    if(value !== '' && value !== null) {
      result = ((value-32) / 1.8).toFixed(1).toString();
    }
    return result;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbertoicon'
})
export class NumbertoiconPipe implements PipeTransform {

  transform(value: any): any {
    let iconurl = "assets/imgs/accuicons/" + value + ".png";
    return iconurl;
  }

}

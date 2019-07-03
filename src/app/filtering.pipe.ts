import { Pipe, PipeTransform } from '@angular/core';
import { IFilm } from './film';
@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(tab: IFilm[], filter : string): any {
  console.log(filter)
    if (!tab || !filter) {
            return tab;
        }
        return tab.filter(v => {
        	var str = v.Title.toUpperCase();
        	return str.includes(filter.toUpperCase());
        });
  }

}

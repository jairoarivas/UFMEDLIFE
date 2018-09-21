import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEvents'
})

//filters based in first and last names, and username/email
export class FilterEventsPipe implements PipeTransform {
  transform(items: any, term: any): any {
    if(term === undefined) return items;
    return items.filter( function(items){
      if(items.eventName.toLowerCase().includes(term.toLowerCase())){
        return true;
      }
      else if(items.eventCode.toLowerCase().includes(term.toLowerCase())){
        return true;
      }
      else{
        return false;
      }
    })
  }
}

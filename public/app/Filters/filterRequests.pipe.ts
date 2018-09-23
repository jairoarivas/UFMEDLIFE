import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRequests'
})

//filters based in first and last names, and username/email
export class FilterRequestsPipe implements PipeTransform {
  transform(items: any, term: any): any {
    if(term === undefined) return items;
    return items.filter( function(items){
      if(items.pointRequestName.toLowerCase().includes(term.toLowerCase())){
        return true;
      }
      else if(items.pointRequestUser.lastName.toLowerCase().includes(term.toLowerCase())){
        return true;
      }
      else if(items.pointRequestUser.firstName.toLowerCase().includes(term.toLowerCase())){
        return true;
      }
      else if(items.pointRequestUser.username.toLowerCase().includes(term.toLowerCase())){
        return true;
      }
      else{
        return false;
      }
    })
  }
}

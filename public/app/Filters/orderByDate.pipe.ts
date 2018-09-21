import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "orderByDate"
})
export class DateSortPipe {
  transform(array: any, args: any): any {
    if(array !== undefined){
      array.sort((a: Date, b: Date) => {
        if(a[args] < b[args]){
          return 1;
        }
        else if(a[args] > b[args]){
          return -1;
        }
        else{
          return 0;
        }
      });
    }
    return array;
  }
}

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "orderByNumber"
})
export class NumberSortPipe {
  transform(array: any, args: any): any {
    if(array !== undefined){
      array.sort((a: any, b: any) => {
        if(a[args] - b[args] < 0){
          return 1;
        }
        else if(a[args] - b[args] > 0){
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

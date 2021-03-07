import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: string, maxlength : number): string {
    if(value.length > maxlength)
      return value.slice(0,maxlength) + '...'
    else
      return value;
  }

  
}

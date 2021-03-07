import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: string, ): string {
    if(!value) {
      return "avatar.jpg";
    }
    else {
      return value;
    }
  }

}

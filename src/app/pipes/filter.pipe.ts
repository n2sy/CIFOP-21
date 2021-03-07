import { Pipe, PipeTransform } from '@angular/core';
import { Serveur } from '../models/serveur';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: Serveur[], selectedStatus : string): Serveur[] {
    if(selectedStatus.length == 0)
      return value;
    else {
      let newServers : Serveur[] = [];
      for (let serv of value) {
        if(serv.status == selectedStatus)
          newServers.push(serv);
      }
      return newServers;
    }
  }

}

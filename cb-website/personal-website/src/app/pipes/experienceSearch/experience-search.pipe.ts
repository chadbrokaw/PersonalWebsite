import { Pipe, PipeTransform } from '@angular/core';
import { Experience } from '../../models/experience.model';

@Pipe({
  name: 'experienceSearch'
})
export class ExperienceSearchPipe implements PipeTransform {

  transform( items: Experience[],
             currentlyEmployed: boolean,
             employment: boolean,
             award: boolean,
             project: boolean,
             club: boolean ): any {

    if ( items && items.length ) {

    }
    else {
      return items;
    }

  }

}

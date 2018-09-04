import { Pipe, PipeTransform } from '@angular/core';
import { Experience } from '../../models/experience.model';

@Pipe({
  name: 'experienceSearch'
})
export class ExperienceSearchPipe implements PipeTransform {

  transform( items: Experience[],
             highlights: boolean,
             work: boolean,
             award: boolean,
             club: boolean,
             project: boolean,
             everything: boolean): any {
    debugger;
    if ( everything ) {
      return items;
    }

    if ( items && items.length ) {
        return items.filter((item) => {
          debugger;
          if (
            ( highlights && item.highlight === highlights ) ||
            ( work && item.work === work ) ||
            ( club && item.club === club ) ||
            ( award && item.award === award ) ||
            ( project && item.project === project )
          ) {
              return true
          }
          else {
            return false;
          }
        })
    }
    else {
      return items;
    }

  }

}

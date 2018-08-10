//--Angular---
import { Component, OnInit } from '@angular/core';

//--Service---
import { EmitMyNameService } from '../services/emit-my-name/emit-my-name.service';
import { ExperienceService } from "../services/experience/experience.service";

//--Model---
import { Experience }        from "../models/experience.model";


@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent implements OnInit {

           compName: string = "Experience";
  experiences: Experience[] = undefined;

  constructor( private emitMyName: EmitMyNameService,
               private experienceService: ExperienceService ) { }

  ngOnInit() {
    this.emitMyName.emitComponentName( this.compName );
    this.getExperiencesFromService();
  }

  /*
   * Name: getExperienceFromService
   * Purpose: This function's purpose is to gather all of the experience data from the ExperienceService
   * @PARAM: none
   * @RETURN: void
   */
  public getExperiencesFromService(): void {
    this.experiences = this.experienceService.get();
  }

}

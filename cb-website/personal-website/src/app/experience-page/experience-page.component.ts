import { Component, OnInit } from '@angular/core';
import { EmitMyNameService } from '../services/emit-my-name/emit-my-name.service';
import { Experience }        from "../models/experience.model";
import { ExperienceService } from "../services/experience/experience.service";

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent implements OnInit {

  compName: string = "Experience";

  experiences: Experience[];

  constructor( private emitMyName: EmitMyNameService, private experienceService: ExperienceService ) { }

  ngOnInit() {
    this.emitMyName.emitComponentName(this.compName);
    this.getExperiencesFromService();
    console.log(this.experiences);
  }

  public getExperiencesFromService(): void {
    this.experiences = this.experienceService.get();
  }

}

//--Angular---
import { Component, OnInit }    from '@angular/core';
import { Title }                from '@angular/platform-browser';

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
  flag: boolean = false;
  highlightButton: boolean = true;
  workButton: boolean = false;
  awardButton: boolean = false;
  clubsButton: boolean = false;
  projectsButton: boolean = false;
  everythingButton: boolean = false;

  highlightButtonType: string = 'select';
  workButtonType: string = 'disabled';
  awardButtonType: string = 'disabled';
  clubsButtonType: string = 'disabled';
  projectsButtonType: string = 'disabled';
  everythingButtonType: string = 'disabled';


  constructor( private emitMyName: EmitMyNameService,
               private experienceService: ExperienceService,
               private titleService: Title ) { }

  ngOnInit() {
    this.emitMyName.emitComponentName( this.compName );
    this.getExperiencesFromService();
    this.titleService.setTitle('Chad Brokaw | Experience')
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

  public filterSelect(button: string) {

    switch (button) {
      case 'highlight':
        if ( this.highlightButton ) {
          this.highlightButton = !this.highlightButton;
          this.highlightButtonType = "disabled";
        }
        else {
          this.highlightButton = !this.highlightButton;
          this.highlightButtonType = "select";
        }
        break;

      case 'work':
        if ( this.workButton ) {
          this.workButton = !this.workButton;
          this.workButtonType = "disabled";
        }
        else {
          this.workButton = !this.workButton;
          this.workButtonType = "select";
        }
        break;

      case 'award':
        if ( this.awardButton ) {
          this.awardButton = !this.awardButton;
          this.awardButtonType = "disabled";
        }
        else {
          this.awardButton = !this.awardButton;
          this.awardButtonType = "select";
        }
        break;

      case 'clubs':
        if ( this.clubsButton ) {
          this.clubsButton = !this.clubsButton;
          this.clubsButtonType = "disabled";
        }
        else {
          this.clubsButton = !this.clubsButton;
          this.clubsButtonType = "select";
        }
        break;

      case 'projects':
        if ( this.projectsButton ) {
          this.projectsButton = !this.projectsButton;
          this.projectsButtonType = "disabled";
        }
        else {
          this.projectsButton = !this.projectsButton;
          this.projectsButtonType = "select";
        }
        break;

      case 'everything':
        if ( this.everythingButton ) {
          this.everythingButton = !this.everythingButton;
          this.everythingButtonType = "disabled";
        }
        else {
          this.everythingButton = !this.everythingButton;
          this.everythingButtonType = "select";
        }
        break;
    }
    console.log(this.highlightButton);
  }

}

//--Angular---
import {Component,
  HostListener, OnInit}           from '@angular/core';
import {animate, query, stagger,
  state, style,
  transition, trigger}            from "@angular/animations";

//--Model---
import { Skill }                  from "../models/skill.model";
import { SkillService }           from "../services/skill/skill.service";

//--Service---
import { EmitMyNameService }      from '../services/emit-my-name/emit-my-name.service';


@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('100ms', [
            animate('.5s .6s ease-out', style({ opacity: 1 }))
          ]),
          { optional: true }
        )
      ])
    ]),
    trigger('fadeIn2', [
      state('in', style( { opacity: 1 })),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('1.2s ease-in-out')
      ])
    ])
  ]
})
export class SkillsPageComponent implements OnInit {

     compName: string = "Skills";
      skills: Skill[] = undefined;
    edgeIndex: number = 2;
  screenWidth: number = undefined;


  constructor( private emitMyName: EmitMyNameService,
               private skillservice: SkillService ) {
  }

  ngOnInit() {
      this.emitMyName.emitComponentName( this.compName );
      this.skills = this.skillservice.getSkills();
      this.screenWidth = window.innerWidth;
      this.handleScreenSize( this.screenWidth );
  }

  /*
   * Name: @HostListener
   * Purpose: THis listener monitors for when the window is resized so that the content on the DOM can be reworked dynamically.
   *  When the screen is resized by the user, this listener notices and calls the handleScreenSize function.
   * @PARAM: $event
   * @RETURN: none
   */
  @HostListener( 'window:resize', ['$event'] )
  onResize( event ) {
    this.screenWidth = window.innerWidth;
    this.handleScreenSize( this.screenWidth );
  }

  /*
   * Name: handleScreenSize
   * Purpose: This function is called by the @HostListener and is used to deal with changes to the screen size. The main purpose
   *  of the function is to figure out where the list of skills should break to the next line. This is because the skill at the
   *  very right side of each line in the grid needs to have a slightly different styling.
   * @PARAM: screenwidth [number] This is the current width of the screen.
   * @RETURN: void
   */
  handleScreenSize( screenwidth: number ) {
    if ( screenwidth < 653 ) {
      this.edgeIndex = 2;
    }
    else if ( screenwidth < 958 ) {
      this.edgeIndex = 3;
    }
    else if ( screenwidth < 1334 ) {
      this.edgeIndex = 4;
    }
    else if ( screenwidth < 1810 ) {
      this.edgeIndex = 5;
    }
    else {
      this.edgeIndex = 6;
    }
  }
}

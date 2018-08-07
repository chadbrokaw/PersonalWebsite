import {Component, HostListener, OnInit} from '@angular/core';
import { EmitMyNameService } from '../services/emit-my-name/emit-my-name.service';
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";
import { Skill }             from "../models/skill.model";
import { SkillService }      from "../services/skill/skill.service";


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
  skills: Skill[];
  edgeIndex: number = 2;
  screenWidth: number;


  constructor( private emitMyName: EmitMyNameService, private skillservice: SkillService ) {
  }

  ngOnInit() {
      this.emitMyName.emitComponentName(this.compName);
      this.skills = this.skillservice.getSkills();
      this.screenWidth = window.innerWidth;
      this.handleScreenSize(this.screenWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.handleScreenSize(this.screenWidth);
  }

  handleScreenSize(screenwidth: number) {
    if ( screenwidth < 653 ) {
      this.edgeIndex = 2;
    }
    else if (screenwidth < 958) {
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
    console.log(this.edgeIndex);
  }
}

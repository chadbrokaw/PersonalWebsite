//--Angular---
import {Component,
  HostListener, OnInit}           from '@angular/core';
import {animate, query, stagger,
  state, style,
  transition, trigger}            from "@angular/animations";
import { Title }                  from '@angular/platform-browser';

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
    trigger('fadeInSingle', [
      state('in', style( { opacity: 1 })),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('.6s ease-in-out')
      ])
    ])
  ]
})
export class SkillsPageComponent implements OnInit {

  selectSkill: any = 'Angular';
  skillLevel: any = 'Experienced';

  single = [
    {
      "name": "Angular",
      "value": 750
    },
    {
      "name": "TypeScript",
      "value": 650
    },
    {
      "name": "JavaScript",
      "value": 650
    },
    {
      "name": "HTML",
      "value": 600
    },
    {
      "name": "CSS",
      "value": 600
    },
    {
      "name": "Agile",
      "value": 900
    },
    {
      "name": "iOS/macOS",
      "value": 1000
    },
    {
      "name": "Docker",
      "value": 150
    },
    {
      "name": "C++",
      "value": 300
    },
    {
      "name": "Python",
      "value": 100
    },
    {
      "name": "mySQL",
      "value": 200
    }
  ];




  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = false;
  showYAxisLabel = false;
  xAxisTicks = [];
  xAxisLabel = 'experience level';
  yAxisLabel = 'skill';
  legendTitle = 'Skills';
  colorScheme = {
    domain: ['#dd0331CC', '#017accCC', '#f0dc4fCC', '#e54d27CC', '#264da4CC', '#af2362CC', '#6ae4edCC', '#099cecCC', '#d35eb8CC', '#ffd03cCC', '#e58f00CC']
  };
  compName: string = "Skills";
      skills: Skill[] = undefined;
    edgeIndex: number = 2;
  screenWidth: number = undefined;
  smallScreen: boolean = false;


  constructor( private emitMyName: EmitMyNameService,
               private skillService: SkillService,
               private titleService: Title ) {
  }

  ngOnInit() {
      this.emitMyName.emitComponentName( this.compName );
      this.skills = this.skillService.getSkills();
      this.screenWidth = window.innerWidth;
      this.handleScreenSize( this.screenWidth );
      this.titleService.setTitle('Chad Brokaw | Skills');
  }

  bigDisplay($event) {
    console.log($event);
    this.selectSkill = $event.value.name;

    let num: number;
    if ( !$event.value.value ) {
      //Call from Legend
      this.single.forEach((obj: any) => {
        if ( obj.name === this.selectSkill ) {
          num=obj.value;
        }
      });
    }
    else {
      num = $event.value.value;
    }
    if ( num < 200 ) {
      this.skillLevel = 'I\'m learning!';
    }
    else if ( num < 300 ) {
      this.skillLevel = 'Newbie';
    }
    else if ( num < 400 ) {
      this.skillLevel = 'Beginner';
    }
    else if ( num < 500 ) {
      this.skillLevel = 'Some experience';
    }
    else if ( num < 600 ) {
      this.skillLevel = 'Intermediate';
    }
    else if ( num < 700 ) {
      this.skillLevel = 'Proficient';
    }
    else if ( num < 800 ) {
      this.skillLevel = 'Experienced';
    }
    else if ( num <= 1000 ) {
      this.skillLevel = 'Advanced';
    }
  }


  smallDisplay(skill) {
    this.selectSkill = skill.name;
    let num = skill.exp;
    if ( num < 200 ) {
      this.skillLevel = 'I\'m learning!';
    }
    else if ( num < 300 ) {
      this.skillLevel = 'Newbie';
    }
    else if ( num < 400 ) {
      this.skillLevel = 'Beginner';
    }
    else if ( num < 500 ) {
      this.skillLevel = 'Some experience';
    }
    else if ( num < 600 ) {
      this.skillLevel = 'Intermediate';
    }
    else if ( num < 700 ) {
      this.skillLevel = 'Proficient';
    }
    else if ( num < 800 ) {
      this.skillLevel = 'Experienced';
    }
    else if ( num <= 1000 ) {
      this.skillLevel = 'Advanced';
    }
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
    if ( screenwidth <= 775 ) {
      this.smallScreen = true
    }
    else {
      this.smallScreen = false;
    }


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

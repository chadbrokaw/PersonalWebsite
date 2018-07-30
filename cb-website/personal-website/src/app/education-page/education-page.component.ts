import { Component, OnInit,
              HostListener } from '@angular/core';
import { EmitMyNameService } from '../services/emit-my-name/emit-my-name.service';
import { ClassService }      from '../services/class-service/class-service.service';
import { trigger, state, style,
  animate, transition, query,
  stagger}                      from '@angular/animations';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('100ms', [
          animate('.5s 1s ease-out', style({ opacity: 1 }))
        ]),
          { optional: true }
        )
      ])
    ]),

    trigger('flyInOut', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({
          transform: 'translateY(50%)',
          opacity: 0
        }),
        animate('.4s 2.4s ease-in-out')
      ])
    ])
  ]
})
export class EducationPageComponent implements OnInit {

  compName: string = "Education";
  screenWidth: any = window.innerWidth;
  gpaRadius: number = undefined;
  fontSize: number = undefined;
  classes: any = undefined;
  number: number = 1;

  constructor( private emitMyName: EmitMyNameService,
               private classList: ClassService ) { }

  ngOnInit() {
    this.emitMyName.emitComponentName(this.compName);
    this.handleScreenSize(this.screenWidth)

    this.classes = this.classList.getClasses();
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.screenWidth = window.innerWidth;
      this.handleScreenSize(this.screenWidth);
    }

  private handleScreenSize(screenSize: any): void {
    if ( screenSize < 625 ) {
      this.gpaRadius = 88;
      this.fontSize = 35;
    }
    else {
      this.gpaRadius = 125;
      this.fontSize = 70;
    }
  }

}

//--Angular---
import { Component, OnInit,
              HostListener }    from '@angular/core';
import { trigger, state, style,
  animate, transition, query,
  stagger}                      from '@angular/animations';
import { Title }                from '@angular/platform-browser';

//--Service---
import { EmitMyNameService }    from '../services/emit-my-name/emit-my-name.service';
import { ClassService }         from '../services/class-service/class-service.service';


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
        animate('.4s 2.0s ease-in-out')
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

  constructor( private emitMyName: EmitMyNameService,
               private classList: ClassService,
               private titleService: Title ) { }

  ngOnInit() {
    this.emitMyName.emitComponentName( this.compName );
    this.handleScreenSize( this.screenWidth );
    this.titleService.setTitle('Chad Brokaw | Education');
    this.classes = this.classList.getClasses();
  }

  /*
   * Name: @HostListener
   * Purpose: This function listens for a change in the size of the window. When a change is detected it saves the width
   *  and then calls the handleScreenSize function.
   * @PARAM: event [$event] The resize event
   */
  @HostListener('window:resize', ['$event'])
    onResize( event ) {
      this.screenWidth = window.innerWidth;
      this.handleScreenSize( this.screenWidth );
    }

  /*
   * Name: handleScreenSize
   * Purpose: This function is called whenever the screen size changes. If the screenSize drops below a certain threshold, the
   *  GPA circle attributes are changed (radius and font-size)
   * @PARAM: screenSize [any] The current screen size, in pixels
   * @RETURN: void
   */
  private handleScreenSize( screenSize: any ): void {
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

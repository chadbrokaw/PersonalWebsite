import { Component, OnInit,
  HostListener }                from '@angular/core';
import { trigger, state, style,
  animate, transition, query,
  stagger}                      from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  animations: [
    trigger('obscureState', [
      state('menuClose', style({
        backgroundColor: 'hsla(0, 0%, 0%, 0)'
      })),
      state('menuOpen', style({
        backgroundColor: 'hsla(0, 0%, 54%, 0.65)'
      })),
      transition('menuClose => menuOpen', animate('600ms ease-in')),
      transition('menuOpen => menuClose', animate('600ms ease-out'))
    ]),
    trigger('fadeIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('100ms', [
          animate('.5s .4s ease-out', style({ opacity: 1 }))
        ]),
        { optional: true }),

        query(':leave', stagger('100ms', [
          animate('.5s .2s ease-out', style({opacity: 0}))
        ]),
        { optional: true })
      ])
    ])
  ]
})
export class MenuBarComponent implements OnInit {

  screenWidth: any = undefined;
  screenHeight: any = undefined;
  smallScreen: boolean = false;
  displayMenu: string = 'menuClose';
  icon: string = "menu";
  testNum: number = 4.5
  iconMargin: number = undefined;
  icons: string[] = ["home","person","work","build","school","mail"]
  imgSelected: string = undefined;

  constructor( private router: Router ) { }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.iconMargin = this.screenHeight/7;
    console.log(this.screenHeight);
    this.handleScreenSize(this.screenWidth);
  }


  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.screenWidth = window.innerWidth;
      this.handleScreenSize(this.screenWidth);
    }

  private handleScreenSize(screenSize: any): void {
    if ( screenSize < 775 ) {
      this.smallScreen = true;
    }
    else {
      this.smallScreen = false;
    }
  }

  public buttonClicked(e: any): void {
    if ( this.icon === "menu" ) {
      this.displayMenu = 'menuOpen';
      this.icon = "close";
    }
    else {
      this.displayMenu = 'menuClose';
      this.icon = "menu";
    }
  }

  public navButtonClicked(icon: string): void {
    if ( icon === "home") {
      this.displayMenu = 'menuClose';
      this.icon = "menu";
      this.router.navigate(['/Home']);
    }
    else if ( icon === "person") {
        this.displayMenu = 'menuClose';
        this.icon = "menu";
        this.router.navigate(['/AboutMe']);
    }
    else if ( icon === "work") {
        this.displayMenu = 'menuClose';
        this.icon = "menu";
        this.router.navigate(['/Experience']);
    }
    else if ( icon === "build") {
        this.displayMenu = 'menuClose';
        this.icon = "menu";
        this.router.navigate(['/Skills']);
    }
    else if ( icon === "school") {
        this.displayMenu = 'menuClose';
        this.icon = "menu";
        this.router.navigate(['/Education']);
    }
    else if ( icon === "mail") {
        this.displayMenu = 'menuClose';
        this.icon = "menu";
        this.router.navigate(['/Contact']);
    }
  }

}

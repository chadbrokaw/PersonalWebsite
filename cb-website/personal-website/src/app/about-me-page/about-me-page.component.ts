import { Component, OnInit } from '@angular/core';
import { EmitMyNameService } from '../services/emit-my-name/emit-my-name.service';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss']
})
export class AboutMePageComponent implements OnInit {

    compName: string = "AboutMe";

    constructor( private emitMyName: EmitMyNameService ) { }

    ngOnInit() {
      this.emitMyName.emitComponentName(this.compName);
    }
}

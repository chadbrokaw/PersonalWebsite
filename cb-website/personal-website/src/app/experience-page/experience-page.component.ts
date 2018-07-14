import { Component, OnInit } from '@angular/core';
import { EmitMyNameService } from '../services/emit-my-name/emit-my-name.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent implements OnInit {

  compName: string = "Experience";

  constructor( private emitMyName: EmitMyNameService ) { }

  ngOnInit() {
    this.emitMyName.emitComponentName(this.compName);
  }

}

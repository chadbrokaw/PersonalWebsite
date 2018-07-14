import { Component, OnInit } from '@angular/core';
import { EmitMyNameService } from '../services/emit-my-name/emit-my-name.service';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent implements OnInit {

  compName: string = "Skills";

  constructor( private emitMyName: EmitMyNameService ) { }

  ngOnInit() {
      this.emitMyName.emitComponentName(this.compName);
  }

}

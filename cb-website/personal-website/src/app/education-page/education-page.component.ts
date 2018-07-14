import { Component, OnInit } from '@angular/core';
import { EmitMyNameService } from '../services/emit-my-name/emit-my-name.service';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss']
})
export class EducationPageComponent implements OnInit {

  compName: string = "Education";

  constructor( private emitMyName: EmitMyNameService ) { }

  ngOnInit() {
    this.emitMyName.emitComponentName(this.compName);
  }

}

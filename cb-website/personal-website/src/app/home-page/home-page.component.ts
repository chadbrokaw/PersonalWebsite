import { Component, OnInit } from '@angular/core';
import { EmitMyNameService } from '../services/emit-my-name/emit-my-name.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  compName: string = "Home";

  constructor( private emitMyName: EmitMyNameService ) { }

  ngOnInit() {
    this.emitMyName.emitComponentName(this.compName);
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgCircleProgressModule } from 'ng-circle-progress';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { AppRoutingModule } from './/app-routing.module';

import { EmitMyNameService } from './services/emit-my-name/emit-my-name.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutMePageComponent,
    SkillsPageComponent,
    ContactPageComponent,
    EducationPageComponent,
    ExperiencePageComponent,
    MenuBarComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    NgCircleProgressModule.forRoot({
      radius: 88,
      space: -5,
      toFixed: 0,
      unitsColor: "#000000",
      outerStrokeWidth: 5,
      outerStrokeColor: "#292a2b",
      outerStrokeLinecap: "round",
      innerStrokeColor: "#339fff",
      innerStrokeWidth: 5,
      title: "3.88 GPA",
      titleColor: "#292a2b",
      titleFontSize: "35",
      animateTitle: false,
      animationDuration: 1000,
      showSubtitle: false,
      showUnits: false
    })
  ],
  providers: [EmitMyNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }

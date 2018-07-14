import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationPageComponent } from './education-page.component';

describe('EducationPageComponent', () => {
  let component: EducationPageComponent;
  let fixture: ComponentFixture<EducationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

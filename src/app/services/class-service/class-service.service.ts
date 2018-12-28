//--Angular---
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  classes: any = [
    {
      "Name" : "Interface Design",
      "CSCIClass" : true,
      "Grade" : "",
      "InProgress" : true,
      "Completed" : false
    },
    {
      "Name" : "Mobile Application Development",
      "CSCIClass" : true,
      "Grade" : "",
      "InProgress" : true,
      "Completed" : false
    },
    {
      "Name" : "Algorithms",
      "CSCIClass" : true,
      "Grade" : "",
      "InProgress" : true,
      "Completed" : false
    },
    {
      "Name" : "Introduction to CyberSecurity",
      "CSCIClass" : true,
      "Grade" : "",
      "InProgress" : true,
      "Completed" : false
    },
    {
      "Name" : "Computer Systems",
      "CSCIClass" : true,
      "Grade" : "A",
      "InProgress" : false,
      "Completed" : true
    },
    {
      "Name" : "Software Dev Methods and Tools",
      "CSCIClass" : true,
      "Grade" : "A",
      "InProgress" : false,
      "Completed" : true
    },
    {
      "Name" : "Linear Algebra with CS Applications",
      "CSCIClass" : true,
      "Grade" : "A-",
      "InProgress" : false,
      "Completed" : true
    },
    {
      "Name" : "Data Structures",
      "CSCIClass" : true,
      "Grade" : "A",
      "InProgress" : false,
      "Completed" : true
    },
    {
      "Name" : "Discrete Structures",
      "CSCIClass" : true,
      "Grade" : "A-",
      "InProgress" : false,
      "Completed" : true
    },
    {
      "Name" : "Introduction to Computing",
      "CSCIClass" : true,
      "Grade" : "A",
      "InProgress" : false,
      "Completed" : true
    }

  ];

  constructor() { }

  /*
   * Name: getClasses
   * Purpose: This functions sole purpose is to return the classes array.
   * @PARAM: none
   * @RETURN: An array of classes
   */
  public getClasses(): any {
    return this.classes;
  }
}

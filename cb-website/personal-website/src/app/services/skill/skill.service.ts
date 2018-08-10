//--Angular---
import { Injectable } from '@angular/core';

//--Models---
import { Skill }      from "../../models/skill.model";

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills: Skill[] = [
    {
      name: "Angular",
      hex: "#dd0331",
      shadow: "0 0 6px 0 #dd03317d",
      image: "angular.png",
      exp: 3
    },
    {
      name: "Typescript",
      hex: "#017acc",
      shadow: "0 0 6px 0 #017acc7d",
      image: "typescript.png",
      exp: 3
    },
    {
      name: "Javascript",
      hex: "#f0dc4f",
      shadow: "0 0 6px 0 #f0dc4fe0",
      image: "javascript.png",
      exp: 3
    },
    {
      name: "HTML",
      hex: "#e54d27",
      shadow: "0 0 6px 0 #e54d277d",
      image: "html.png",
      exp: 3
    },
    {
      name: "CSS",
      hex: "#264da4",
      shadow: "0 0 6px 0 #264da47d",
      image: "css.png",
      exp: 3
    },
    {
      name: "Agile",
      hex: "#af2362",
      shadow: "0 0 6px 0 #af23627d",
      image: "agile.png",
      exp: 3
    },
    {
      name: "iOS/MacOS",
      hex: "#6ae4ed",
      shadow: "0 0 6px 0 #6ae4edd9",
      image: "appleOS.png",
      exp: 4
    },
    {
      name: "Docker",
      hex: "#099cec",
      shadow: "0 0 6px 0 #099cec7d",
      image: "docker.png",
      exp: 1
    },
    {
      name: "C++",
      hex: "#d35eb8",
      shadow: "0 0 6px 0 #d35eb87d",
      image: "c++.png",
      exp: 2
    },
    {
      name: "Python",
      hex: "#ffd03c",
      shadow: "0 0 6px 0 #ffd03cd9",
      image: "python.png",
      exp: 1
    },
  ];

  constructor() { }

  /*
   * Name: getSkills
   * Purpose: This function gathers and returns all of my skills as well as some other data.
   * @PARAM: none
   * @RETURN: An array containing all of my skills objects.
   */
  public getSkills(): any {
    return this.skills;
  }


}

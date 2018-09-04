import { ExperienceExtra } from "./experienceExtra.model";

/*
 * Name: Experience [model]
 * Purpose: This class is used to hold all of the relevant data regarding my experience.
 */
export class Experience {
  company: string;
  acronym: boolean;
  fullTitle: string;
  position: string;
  currentlyEmployed: boolean;
  duration: string;
  description: string;
  project: boolean;
  projectName: string;
  award: boolean;
  awardName: string;
  availableExtras: boolean;
  extra: ExperienceExtra[];
  imageName: string;
  highlight: boolean;
  work: boolean;
  club: boolean;
  imageAvailable: boolean;
}

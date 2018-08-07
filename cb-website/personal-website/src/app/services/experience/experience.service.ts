import { Injectable } from '@angular/core';
import { Experience } from "../../models/experience.model";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experiences: any[] = [
    {
      company : 'LASP',
      acronym : false,
      fullTitle : 'Laboratory of Atmospheric and Space Physics',
      position : 'Student Software Development Engineer',
      currentlyEmployed : true,
      duration : 'April 2018 - Present',
      description : 'My team is fully Agile, and we work to build web applications for our scientists in the lab, as well as the general public. I specialize in Angular, with an emphasis in translating AngularJS to Angular 6. I quickly excelled, and within two months I was marked as an experience developer in multiple applications. Using Material Design as a starting point, I helped push for a more cohesive brand and user experience. Finally, I have been a leader in the push to make our web applications more accessible.',
      project : false,
      projectName : '',
      award : false,
      awardName : '',
      availableLinks : true,
      links : [
          'https://lasp.colorado.edu/mms/sdc/public/about/3d/',
          'https://lasp.colorado.edu/mms/sdc/public/burst-plots/#/'
      ],
      imageName : 'lasp.png',
    },
    {
      company : 'SCC',
      acronym : true,
      fullTitle : 'Senior Class Council',
      position : 'President',
      currentlyEmployed : true,
      duration : 'April 2018 - Present',
      description : 'In April of 2018 I was asked by a CU\'s student engagement team to become President of SCC. My responsibilities are to oversee all operations and finances of the board, and guide the strategic vision. Since I started, I have worked with an amazing student team to completely overhaul the Council. This included a complete rewrite of our bylaws, marketing strategy, and brand. In addition, I have also worked to make an SCC website a reality, and I am actively building it know with other Council members.',
      project : false,
      projectName : '',
      award : false,
      awardName : '',
      availableLinks : true,
      links : [ ],
      imageName : 'scc.png',
    },
    {
      company : 'DSB',
      acronym : true,
      fullTitle : 'Distinguished Speakers Board',
      position : 'Vice-Chair',
      currentlyEmployed : false,
      duration : 'September 2016 - May 2018',
      description : 'My role was to handle the logistics, planning, and security of our events, which always sold out CU\'s 2,000-person auditorium. In addition, I handled all internal logistics of the board including group retreats, meeting planning, and web presence. I spearheaded the complete overhaul of the Board\'s web presence and recruitment process, resulting in the most successful recruitment season to date. Finally, I co-moderated live Q&As with both Dr. Brené Brown and Anderson Cooper.',
      project : false,
      projectName : '',
      award : false,
      awardName : '',
      availableLinks : true,
      links : [ ],
      imageName : 'dsb.png',
    },
    {
      company : 'pThree',
      acronym : false,
      fullTitle : '',
      position : 'Front-End Specialist',
      currentlyEmployed : false,
      duration : 'January 2018 - May 2018',
      description : 'This was a group project where I worked with 5 other students to develop a fully functioning app, called pThree The app allowed a host to create an event that guests could then submit music too (via Spotify). The program would then create a playlist containing all of the songs that had mutual interest among guests and then deliver that to the host. I was in charge of developing the front end, where I created a fully custom website alongside a complete brand identity.',
      project : true,
      projectName : '',
      award : false,
      awardName : '',
      availableLinks : true,
      links : [ ],
      imageName : 'p3.png',
    },
    {
      company : 'The Costs of Total Commitment',
      acronym : false,
      fullTitle : '',
      position : 'Artist',
      currentlyEmployed : false,
      duration : 'January 2018 - March 2018',
      description : 'Working with the author (my Grandpa), I developed a cover-to-cover design of the book. This included designing both covers, and formatting the interior of the book to comply with printing standards. I managed the development of this project from the time it was a manuscript to when it was available from Amazon for purchase.',
      project : true,
      projectName : '',
      award : false,
      awardName : '',
      availableLinks : true,
      links : [
        'https://www.amazon.com/Costs-Total-Commitment-creators-American/dp/1973221543/ref=sr_1_1?ie=UTF8&qid=1533618306&sr=8-1&keywords=The+costs+of+total+commitment'
      ],
      imageName : 'TCOTC.png',
    }
  ];

  constructor() {
    //this.buildExperiences()
  }

  // buildExperiences() {
  //   let experience1 = new Experience();
  //   experience1.company = 'LASP';
  //   experience1.acronym = true;
  //   experience1.fullTitle = 'Laboratory of Atmospheric and Space Physics';
  //   experience1.position = 'Student Software Development Engineer';
  //   experience1.currentlyEmployed = true;
  //   experience1.duration = 'April 2018 - Present';
  //
  //   experience1.description = 'I am part of a fully agile team called the web team. In this position, I have gained experience with the full stack, though my main focus is on developing web applications in Angular. When I started this position I didn\'t know anything about Angular, but now after 2 months I am marked as an experience developer on multiple Angular projects as well as one of the few team members who specializes in AngularJS to Angular 6 refactoring. I have also worked to incorporate Material Design into all of our new applications as well as push for a cohesive brand. Finally, I have been a leader in the push to make our web presence be more accessible.';
  //
  //
  //   experience1.project = false;
  //   experience1.projectName = '';
  //   experience1.award = false;
  //   experience1.awardName = '';
  //   experience1.availableLinks = true;
  //   experience1.links = [
  //     'https://lasp.colorado.edu/mms/sdc/public/about/3d/',
  //     'https://lasp.colorado.edu/mms/sdc/public/burst-plots/#/'
  //   ];
  //   experience1.imageName = 'LASP.png';
  //   this.experiences.push(experience1);
  // }

  public get(): Experience[] {
    return this.experiences;
  }
}

// --Angular---
import { Injectable } from '@angular/core';

// --Models--- link, picture_as_pdf, photo
import { Experience } from '../../models/experience.model';

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
          description : 'I specialize in front-end web development, with an emphasis in Angular 6. After I started, I quickly excelled, and within two months I was given \"experienced developer status\" on multiple applications. Using Material Design as a starting point, I helped push for a more cohesive brand and user experience. Finally, I have been a leader in the push to make our web applications more accessible and usable.',
          project : false,
          projectName : '',
          award : false,
          awardName : '',
          availableExtras : false,
          extra : [
              {
                  title : 'Product',
                  link : 'https://lasp.colorado.edu/mms/sdc/public/about/3d/' ,
                  type : 'link',
                  color : '#FF8100'
              },
              {
                  title : 'Product',
                  link : 'https://lasp.colorado.edu/mms/sdc/public/burst-plots/#/' ,
                  type : 'link',
                  color : '#FF8100'
              }
          ],
          imageName : 'lasp.png',
          highlight: true,
          work: true,
          club: false,
          imageAvailable: true
      },
      {
          company : 'SCC',
          acronym : true,
          fullTitle : 'Senior Class Council',
          position : 'President',
          currentlyEmployed : true,
          duration : 'April 2018 - Present',
          description : 'In April of 2018 I was asked by CU\'s student engagement team to become President of SCC. My responsibilities are to oversee all operations and finances of the board, and guide the strategic vision. Since I started, I have worked with an amazing student team to completely overhaul the Council. This included a complete rewrite of our bylaws, marketing strategy, and brand. In addition, I have also worked to make an SCC website a reality, and I am actively building it now with other Council members.',
          project : false,
          projectName : '',
          award : false,
          awardName : '',
          availableExtras : false,
          extra : [
              {
                  title : 'Website Design',
                  link : './assets/scc1full.png' ,
                  type : 'photo',
                  color : '#05C8FF'
              }
          ],
          imageName : 'scc.png',
          highlight: true,
          work: false,
          club: true,
          imageAvailable: true
      },
      {
          company : 'DSB',
          acronym : true,
          fullTitle : 'Distinguished Speakers Board',
          position : 'Vice-Chair',
          currentlyEmployed : false,
          duration : 'September 2016 - May 2018',
          description : 'My role was to handle the logistics, planning, and security of our events, which always sold out CU\'s 2,000-person auditorium. In addition, I handled all internal logistics of the board, including group retreats, meeting planning, and web presence. I spearheaded the complete overhaul of the Board\'s web presence and recruitment process, resulting in the most successful recruitment season to date. Finally, I co-moderated live Q&As with both Dr. Brené Brown and Anderson Cooper.',
          project : false,
          projectName : '',
          award : false,
          awardName : '',
          availableExtras : false,
          extra : [
              {
                  title : 'Event',
                  link : './assets/DSBAC.jpg' ,
                  type : 'photo',
                  color : '#05C8FF'
              },
              {
                  title : 'Event',
                  link : './assets/Cooper.jpg' ,
                  type : 'photo',
                  color : '#05C8FF'
              },
              {
                  title : 'Event',
                  link : './assets/IMG_0426.jpg' ,
                  type : 'photo',
                  color : '#05C8FF'
              }
          ],
          imageName : 'dsb.png',
          highlight: true,
          work: true,
          club: true,
          imageAvailable: true
      },
      {
          company : 'Be Involved',
          acronym : false,
          fullTitle : '',
          position : 'UX Designer',
          currentlyEmployed : true,
          duration : 'August 2018 - December 2018',
          description : 'This is a school project in which I developed the user experience of an application. This was a semester-long project where we went through all of the steps of interface design. Including user testing, user interviews, storyboarding, and prototyping in both low fidelity and high fidelity.',
          project : true,
          projectName : '',
          award : false,
          awardName : '',
          availableExtras : true,
          extra : [
              {
                  title : 'Be Involved',
                  link : '/Portfolio' ,
                  type : 'link',
                  color : '#ff63fc'
              }
          ],
          imageName : 'BeInvolved.png',
          highlight: true,
          work: true,
          club: false,
          imageAvailable: true
      },
      {
          company : 'pThree',
          acronym : false,
          fullTitle : '',
          position : 'Front-End Specialist',
          currentlyEmployed : false,
          duration : 'January 2018 - May 2018',
          description : 'This was a group project where I worked with 5 other students to develop a fully functioning app, called pThree. The app allowed a host to create an event that guests could then submit music too (via Spotify). The program would then create a playlist containing all of the songs that had mutual interest among guests and then deliver the created playlist to the host. I was in charge of developing the front end, where I created a fully custom website alongside a complete brand identity.',
          project : true,
          projectName : '',
          award : false,
          awardName : '',
          availableExtras : false,
          extra : [
              {
                  title : 'Website',
                  link : './assets/pThree1.png' ,
                  type : 'photo',
                  color : '#05C8FF'
              },
              {
                  title : 'Website',
                  link : './assets/pThree2.png' ,
                  type : 'photo',
                  color : '#05C8FF'
              }
          ],
          imageName : 'p3.png',
          highlight: true,
          work: false,
          club: false,
          imageAvailable: true
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
          availableExtras : false,
          extra : [
              {
                  title : 'Book',
                  link : 'https://www.amazon.com/Costs-Total-Commitment-creators-American/dp/1973221543/ref=sr_1_1?ie=UTF8&qid=1533618306&sr=8-1&keywords=The+costs+of+total+commitment' ,
                  type : 'link',
                  color : '#FF8100'
              }
          ],
          imageName : 'TCOTC.png',
          highlight: true,
          work: false,
          club: false,
          imageAvailable: true
      },
      {
          company : 'Destination Services Corporation',
          acronym : false,
          fullTitle : '',
          position : 'Event Coordinator',
          currentlyEmployed : false,
          duration : 'July 2014 - August 2016',
          description : 'As an event coordinator I worked to facilitate the best possible events for our guests at the Braodmoor hotel, a top tier hotel in Colorado Springs. Every day we promised our guests perfection, and every day I delivered on that promise.',
          project : false,
          projectName : '',
          award : false,
          awardName : '',
          availableExtras : false,
          extra : [],
          imageName : '',
          highlight: false,
          work: true,
          club: false,
          imageAvailable: false
      },
      {
          company : 'oSTEM',
          acronym : true,
          fullTitle : 'Out in STEM',
          position : 'General Member',
          currentlyEmployed : true,
          duration : 'August 2017 - Present',
          description : 'oSTEM is a national group that works year-round to advocate for LGBTQIA+ causes as well as encourage more queer representation in STEM fields. This group was recently recognized as the student group of the year by CU Boulder.',
          project : false,
          projectName : '',
          award : false,
          awardName : '',
          availableExtras : false,
          extra : [
              {
                  title : 'Website',
                  link : 'https://www.ostem.org/' ,
                  type : 'link',
                  color : '#FF8100'
              }
          ],
          imageName : '',
          highlight: true,
          work: false,
          club: true,
          imageAvailable: false
      },
      {
          company : 'Lanis (Lanny) and Carmen Pinchuk Student Leader Scholarship',
          acronym : false,
          fullTitle : '',
          position : '',
          currentlyEmployed : false,
          duration : 'August 2018',
          description : 'This scholarship is given to students in the College of Engineering and Applied Sciences who are engaged and active leaders in both the College community as well as the broader CU campus community.',
          project : false,
          projectName : '',
          award : true,
          awardName : 'Lanis (Lanny) and Carmen Pinchuk Student Leader Scholarship',
          availableExtras : false,
          extra : [],
          imageName : '',
          highlight: false,
          work: false,
          club: false,
          imageAvailable: false
      },
      {
          company : 'President Joseph A. Sewell Award',
          acronym : false,
          fullTitle : '',
          position : '',
          currentlyEmployed : false,
          duration : 'August 2016',
          description : 'This scholarship is given to CU Boulder incoming freshmen who have an ACT score of 33 or higher and have a weighted GPA of 4.0 or higher. This is the highest scholarship a student can receive from the university.',
          project : false,
          projectName : '',
          award : true,
          awardName : 'President Joseph A. Sewell Award',
          availableExtras : false,
          extra : [],
          imageName : '',
          highlight: false,
          work: false,
          club: false,
          imageAvailable: false
      },
      {
          company : 'Colorado Spring\'s Best and Brightest of 2016',
          acronym : false,
          fullTitle : '',
          position : '',
          currentlyEmployed : false,
          duration : 'May 2016',
          description : 'During my senior year of high school, the Colorado Springs Gazette selected me to be one of Colorado Springs Best and Brightest of 2016. I, alongside 25 students from other schools, were interviewed for the paper and recognized at a public event.',
          project : false,
          projectName : '',
          award : true,
          awardName : 'Colorado Spring\'s Best and Brightest of 2016',
          availableExtras : false,
          extra : [],
          imageName : '',
          highlight: false,
          work: false,
          club: false,
          imageAvailable: false
      },
      {
          company : 'Keynote Speaker at the first annual C.U.R.E. symposium.',
          acronym : false,
          fullTitle : '',
          position : '',
          currentlyEmployed : false,
          duration : 'December 2016',
          description : 'During my freshmen year of college I was chosen by the faculty of the Department of Molecular, Cellular, and Developmental Biology to be the C.U.R.E. keynote speaker. I presented my research regarding a bacteriophage that I had analyzed, characterized, and named (it\'s name is Iota)',
          project : false,
          projectName : '',
          award : true,
          awardName : 'Keynote Speaker at the first annual C.U.R.E. symposium.',
          availableExtras : false,
          extra : [
              {
                  title : 'Iota',
                  link : './assets/Iota.tif' ,
                  type : 'photo',
                  color : '#05C8FF'
              }
          ],
          imageName : '',
          highlight: false,
          work: false,
          club: false,
          imageAvailable: false
      },

  ];

  constructor() { }


  /*
   * Name: get
   * Purpose: This function returns all of the experience data that is available.
   * @PARAM: none
   * @RETURN: Experiences[] - An array of all of my experiences
   */
  public get(): Experience[] {
    return this.experiences;
  }
}

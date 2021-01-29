import { Component, OnInit } from '@angular/core';

interface Exp {
  yearAndCompony:String;
  title:String;
  description:String[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experience:Exp[]=[
    {
      yearAndCompony:'DELL EMC / May 2018 ',
      title:'Software Engineer II',
      description:[
        'Integrated Data Protection Appliance (IDPA)',
        'Working as a Software Engineer II in IDPA as a backend developer.',
        'Working on implementing feature requirements as part of configuration of different products integrated by the appliance.',
        'Have been one of the critical members of the development team.',
        'Got promoted from SE I to SE II',
        'Mentored 2 Juniors efficiently when there were tight deadlines and team size was quite limited.'
      ]
    },
    {
      yearAndCompony:'GS Lab / July 2017 – April 2018',
      title:'Software Development Engineer',
      description:[
        'Started the professional career after getting PPO at the end of the internship',
        'OOMA Analytics',
        'Worked on implementing java rest API to connect Elasticsearch for searching and reporting the log data',
        'Adapted to work in a team efficiently.',
      ]
    },
    {
      yearAndCompony:'GS Lab / Jan 2017 – June 2017',
      title:'Full-time Software Intern',
      description:[
        'Worked as a full-time intern',
        'Developed Remote Solar Monitoring and Analytics Web Application using Predix cloud Platform.',
        'Development of the complete web app with front-end and back-end work.',
        'Adapted to work in a team efficiently.',
      ]
    }
  ];
 
  constructor() {
    
    console.log("in experience");
    
   }
  ngOnInit(): void {
  }

}

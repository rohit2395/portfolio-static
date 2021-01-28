import { Component, OnInit } from '@angular/core';

interface Skill{
  name:String;
  progress:Number;
  color:String;
}

interface Tool{
  name:String;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills:Skill[] = [
    {name:'Java',progress:85,color:'#018997'},
    {name:'Rest API, Webservice',progress:55,color:'#018997'},
    {name:'HTML, CSS, JavaScript',progress:60,color:'#018997'},
    // {name:'Angular 8+',progress:80,color:'#018997'},
    {name:'VMware vSphere',progress:40,color:'#018997'},
    {name:'Linux',progress:50,color:'#018997'},
  ]

  tools:Tool[] = [
    {name:'SpringBoot'},
    {name:'Angular 8+'},
    {name:'MySQL,PostgreSQL'},
    {name:'JIRA,Confluence,Git'}
  ]

  constructor() {
    console.log('in skills');
    
   }

  ngOnInit(): void {
  }

}

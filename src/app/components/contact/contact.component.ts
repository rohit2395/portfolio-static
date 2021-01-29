import { Component, OnInit } from '@angular/core';
import { faLinkedin,faGithubSquare,faTwitterSquare,faFacebookSquare,faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faLinkedin=faLinkedin;
  faGithubSquare = faGithubSquare;
  faEnvelope = faEnvelope;
  faTwitterSquare = faTwitterSquare;
  faFacebookSquare = faFacebookSquare;
  faInstagramSquare = faInstagramSquare; 
  faMobile = faMobileAlt;
  constructor() { 
    console.log("in contact");
    
  }

  ngOnInit(): void {
  }

}

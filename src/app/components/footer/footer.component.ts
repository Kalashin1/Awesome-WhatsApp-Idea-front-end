import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  footer = {
    title: 'awi',
    message: 'The ancient Egyptians had a well organized legal system and visits to court were frequent. The defandant and the accused both presented their cases before a judge by themselves, there were no lawyers. Judgment were fair and if a person was not satisfied with the judgement, they could take the case to a higher court of appeal.',
    footerLinks: [
      {title : 'resources', links : ['home', 'about us', 'contact us']},
      {title : 'useful links', links : ['login', 'signup', 'create store']},
      {title : 'important', links : ['news & updates', 'services', 'FAQ']}
    ],
    newsletter: { title : 'newsletter', message: 'Signup to our newsletter to get recent updates and happenings'},
    social: { title: 'let us be social', links: ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-twitter']}

  }
}

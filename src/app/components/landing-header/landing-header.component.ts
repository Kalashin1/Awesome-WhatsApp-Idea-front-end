import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.css']
})
export class LandingHeaderComponent implements OnInit {

  constructor() { }

  links = [{link: 'home', text: 'home', icon: 'home'}, {link: 'create-store', text: 'create store', icon: 'store'}, {link : 'contact', text: 'contact us', icon: 'email'}, {link: 'services', icon: 'extension', text: 'services'}]
  ngOnInit(): void {
  }
  title= 'AWI'
  message= 'This is an Awesome WhatsApp Idea to help you sell your products online. Summerian said that you should listen to the voice of your mother like it was the voice of God'
}

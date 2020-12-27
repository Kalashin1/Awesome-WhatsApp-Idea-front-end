import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-contact',
  templateUrl: './landing-contact.component.html',
  styleUrls: ['./landing-contact.component.css']
})
export class LandingContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  content = {
    img : '../../../assets/illustration/shopping.svg',
    linkText: 'send us an email',
    title: 'Lets discuss your needs',
    pullFirstCol : false,
    message : 'You have more questions or you would like to reach us to know more about how we can help you? feel free to do so, hit that button below to send us an email.'
  }

}

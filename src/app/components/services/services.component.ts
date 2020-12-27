import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  services = [{
    text: 'sell online with us', icon: 'add_shopping_cart'
  }, { text : ' automate your business', icon: 'rowing'}, {text : 'make payments easier', icon:"credit_card"}, {text: 'handle your deliveries', icon: 'next_week'}]

  servicesContent = {
    img : '../../../assets/illustration/online_shopping_.svg',
    linkText: 'tell me more',
    title: 'we want to help you',
    pullFirstCol : false,
    message : 'With plenty of resource to help you build your dream. You can connect to yout target market and we can help you reach new customers that are just fingertips away.'
  }




}

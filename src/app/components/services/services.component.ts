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

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  links = [{link: 'home', text: 'home', icon: 'home'}, {link: 'shop', text: 'shop', icon: 'shopping_cart'}, {link: 'create-store', text: 'create store', icon: 'store'}, {lik: 'about', text: 'about us', icon: 'assignment'}, {link : 'contact', text: 'contact us', icon: 'email'}, {link: 'services', icon: 'extension', text: 'services'}]

  imgUrl = '../../../assets/illustration/email_campaign_monochromatic.svg'

  title = 'Please login to view your store'

}

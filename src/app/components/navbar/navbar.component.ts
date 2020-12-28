import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../interface/link'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  @Input()links : Link[]

  @Input()whiteLogo
  @Input() medClass

  ngOnInit(): void {
  }

  hidden = { hidden: false}

  showLinks(){
    this.hidden.hidden = !this.hidden.hidden
  }
  // = [{link: 'home', text: 'home', icon: 'home'}, {link: 'shop', text: 'shop', icon: 'shopping_cart'}, {link: 'create-store', text: 'create store', icon: 'store'}, {lik: 'about', text: 'about us', icon: 'assignment'}, {link : 'contact', text: 'contact us', icon: 'email'}, {link: 'services', icon: 'extension', text: 'services'}]

}

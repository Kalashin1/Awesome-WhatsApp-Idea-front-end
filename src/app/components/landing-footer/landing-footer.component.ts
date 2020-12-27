import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-footer',
  templateUrl: './landing-footer.component.html',
  styleUrls: ['./landing-footer.component.css']
})
export class LandingFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  socialIcons = ['fab fa-facebbok-i', 'fab fa-twitter', 'fab fa-instagram']

}

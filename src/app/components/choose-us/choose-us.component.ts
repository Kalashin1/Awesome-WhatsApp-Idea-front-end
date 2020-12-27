import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.css']
})
export class ChooseUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  content = {
    img : '../../../assets/illustration/credit_card.png',
    linkText: 'yes help me',
    title: 'Pick us because',
    pullFirstCol : true,
    message : 'We understand the importance of an online presence to your business and we are dedicated to ensuring that your business has that much needed presence to enable you live your dreams.'
  }

}

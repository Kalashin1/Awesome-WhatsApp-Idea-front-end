import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() content: {
    img : string,
    title: string,
    message: string,
    linkText: string,
    pullFirstCol: boolean
  }
}

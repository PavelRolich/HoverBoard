import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-square',
  templateUrl: './table-square.component.html',
  styleUrls: ['./table-square.component.scss']
})
export class TableSquareComponent implements OnInit {
  backgroundColorList: string[] = ['red', 'yellow', 'green', 'blue', 'purple'];
  squareList: string[] = [];

  constructor() { }

  ngOnInit() {
    let rnd: number;
    for (let i = 0; i < 500; i++) {
      rnd = Math.floor(Math.random() * 5);
      this.squareList.push(this.backgroundColorList[rnd]);
    }
  }

}

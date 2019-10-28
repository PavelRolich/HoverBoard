import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() backgroundColorInput: string;
  backgroundColor: string;
  transitionClass = false;

  constructor() { }

  ngOnInit() {
  }

  onMouseOver(event: any) {
    this.backgroundColor = this.backgroundColorInput;
    console.log(this.backgroundColor);
    this.transitionClass = false;
  }

  onMouseOut(event: any) {
    this.transitionClass = true;
  }
}

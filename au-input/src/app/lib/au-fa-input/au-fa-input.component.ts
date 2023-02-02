import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuFaInputComponent implements OnInit {

  @Input()
  icon: string;

  constructor() { }

  ngOnInit() {
  }

  get classes() {
    const cssClasses = {
      'fa': true,
      'icon': true
    }

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }
    return cssClasses;
  }
}

import { AfterViewInit, Component, ContentChild, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuFaInputComponent implements OnInit, AfterViewInit {

  @Input()
  icon: string;

  @ContentChild(InputRefDirective, {static: false})
  input: InputRefDirective;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (!this.input) {
      console.log('the au-fa-input needs an input inside its content');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
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

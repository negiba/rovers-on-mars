import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-basic-button',
  templateUrl: 'basic-button.component.html',
  styleUrls: ['basic-button.component.scss']
})

export class BasicButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() isDisabled: boolean;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  clicked = () => this.buttonClicked.emit(true);
}

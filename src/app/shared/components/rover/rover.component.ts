import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {RoverComputePathResponse, RoverResponse} from "../../models/rover";
import {ControlsService} from "../../../core/services/controls.service";
import {RoverService} from "../../../core/services/rover.service";

@Component({
  selector: 'app-rover',
  templateUrl: 'rover.component.html',
  styleUrls: ['rover.component.scss']
})

export class RoverComponent implements OnInit, OnChanges {
  @Output() selected: EventEmitter<number> = new EventEmitter<number>();
  @Output() finishedMove: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() rover: RoverResponse;
  @Input() rows: number;
  @Input() isRotatingLeft: boolean = false;
  @Input() isSelected: boolean = false;
  @Input() destinationCommands: string = '';
  angleToDirection: any = {
    0 : 'N',
    90: 'E',
    '-270': 'E',
    180: 'S',
    '-180': 'S',
    270: 'W',
    '-90': 'W'
  }
  directionToAngle: any = {
    'N': 0,
    'E': 90,
    'S' : 180,
    'W' : 270,
  }
  translations: any = {
    'N': -5,
    'S': 5,
    'E': -5,
    'W': 5
  }
  angle: number;
  translating = false;


  position = { top: '', left: ''};

  constructor(private controlService: ControlsService, private roverService: RoverService) {}

  ngOnInit() {
    this.initPosition();
    this.controlService.leftRotationClicked.subscribe(data => this.rotateLeft());
    this.controlService.rightRotationClicked.subscribe(data => this.rotateRight());
    this.controlService.moveForwardClicked.subscribe(data => this.moveForward());
    // this.controlService.destinationPathClicked.subscribe(data => this.goToDestination())
    this.angle = this.directionToAngle[this.rover.direction];
  }

  ngOnChanges() {
    this.destinationCommands !== undefined ? this.goToDestination() : null;
  }

  initPosition = () => {
    this.position.top = (this.rows - 1 - this.rover.positionY) *  5 + 'rem';
    this.position.left = (this.rover.positionX) * 5 + 'rem';
  }

  set roverStatus(value: number) {
    this.selected.emit(value);
  }

  rotateLeft = () => {
    if(this.isSelected) {
      this.angle -= 90;
      let rov: any = document.getElementById('rover' + this.rover.id);
      this.roverService.executeCommands(this.rover.id, 'L').subscribe(response => {
        this.rover = {...response}
        rov.style.transform = `rotate(${this.angle}deg)`;
      });
    }
  }

  rotateRight = () => {
    if (this.isSelected) {
      this.angle += 90;
      // console.log(this.angleToDirection[this.angle % 360]);
      let rov: any = document.getElementById('rover' + this.rover.id);
      this.roverService.executeCommands(this.rover.id, 'R').subscribe(response => {
        this.rover = {...response}
        rov.style.transform = `rotate(${this.angle}deg)`;
      });
    }
  }

  moveForward = () => {
    if (this.isSelected) {
      let possibilities: any = {
        'N': `translate(0, -100%`,
        'S': 'translate(0, 100%)',
        'E': 'translate(100%, 0)',
        'W': 'translate(-100%, 0)'
      }
      let rov: any = document.getElementById('rover' + this.rover.id);
      this.roverService.executeCommands(this.rover.id, 'M').subscribe({
          next: value => {
            this.translating = true;
            rov.style.transform = `${possibilities[this.rover.direction]}`;
            this.rover = {...value};
            this.finishedMove.emit(true);
          },
          error: err => alert(err.error.message),
          complete: () => console.log('Observer got a complete notification')
        }
      );
    }
  }

  goToDestination = () => {
    const roverCopy = {...this.rover};
    const moveCombinations: any = {
      'L': {
        'N': 'W',
        'W': 'S',
        'S': 'E',
        'E': 'N'
      },
      'R': {
        'N': 'E',
        'E': 'S',
        'S': 'W',
        'W': 'N'
      }

    }
    console.log('dest', this.destinationCommands);
    let rov: any = document.getElementById('rover' + this.rover.id);

  }
}

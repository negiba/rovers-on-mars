import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ControlsService} from "../services/controls.service";
import {RoverService} from "../services/rover.service";
import {RoverResponse} from "../../shared/models/rover";

@Component({
  selector: 'app-control-table',
  templateUrl: 'control-table.component.html',
  styleUrls: ['control-table.component.scss']
})

export class ControlTableComponent implements OnInit {
  @Output() deployFormSubmitted: EventEmitter<any> = new EventEmitter<any>();
  @Output() pathFormSubmitted: EventEmitter<any> = new EventEmitter<any>();
  @Output() changeSelectedRover: EventEmitter<any> = new EventEmitter<any>();
  @Input() rovers: RoverResponse[];
  @Input() selectedRover: RoverResponse | undefined;
  deployForm: FormGroup;
  pathForm: FormGroup;

  constructor(private fb: FormBuilder, private controlService: ControlsService, private roverService: RoverService) {}

  ngOnInit() {
    this.deployForm = this.fb.group({
      positionX :[1],
      positionY: [1],
      direction: ['N']
    });
    this.pathForm = this.fb.group({
      destinationCoordinateX :[1],
      destinationCoordinateY: [1],
    })
  }

  submit(event: any) {
    this.deployFormSubmitted.emit(this.deployForm.value);
  }

  startRotateLeft = () => {
    this.controlService.onLeftRotation();
  }

  startRotateRight = () => {
    this.controlService.onRightRotation();
  }

  startMovingForward = () => {
    this.controlService.onMoveForward();
  }

  changeRover = (event: any) => {
    console.log(event.target.value);
    this.changeSelectedRover.emit(event.target.value);
  }

  showPath = (event:any) => {
    this.controlService.onDestinationPath();
    this.pathFormSubmitted.emit(this.pathForm.value);
  }
}

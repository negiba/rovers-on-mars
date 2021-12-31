import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ControlsService {
  leftRotationClicked: Subject<any> = new Subject<any>();
  rightRotationClicked: Subject<any> = new Subject<any>();
  moveForwardClicked: Subject<any> = new Subject<any>();
  destinationPathClicked: Subject<any> = new Subject<any>();

  constructor() {}

  onLeftRotation = () => this.leftRotationClicked.next(true);
  onRightRotation = () => this.rightRotationClicked.next(true);
  onMoveForward = () => this.moveForwardClicked.next(true);
  onDestinationPath = () => this.destinationPathClicked.next(true);
}

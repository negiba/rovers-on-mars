import {Component, Input, OnInit} from '@angular/core';
import {PlateauGetDimensionsResponse} from "../../models/plateau";
import {RoverResponse} from "../../models/rover";

@Component({
  selector: ' app-grid-cell',
  templateUrl: 'grid-cell.component.html',
  styleUrls: ['grid-cell.component.scss']
})

export class GridCellComponent implements OnInit {
  @Input() cell: PlateauGetDimensionsResponse;

  constructor() {}

  ngOnInit() {}

  selectCell = () => {}
}

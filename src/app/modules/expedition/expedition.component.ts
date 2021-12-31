import {
  Component,
  OnInit
} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RoverService} from "../../core/services/rover.service";
import {PlateauService} from "../../core/services/plateau.service";
import {RoverComputePathResponse, RoverResponse} from "../../shared/models/rover";

@Component({
  selector: 'app-expedition',
  templateUrl: 'expedition.component.html',
  styleUrls: ['expedition.component.scss'],
})

export class ExpeditionComponent implements OnInit {
  wire: any[];
  rovers: any[] = [];
  error: string;
  rotateLeft: boolean = false;
  selectedRover: RoverResponse | undefined;
  destinationPath: string;

  constructor(private route: ActivatedRoute,
              private roverService: RoverService,
              private plateauService: PlateauService) {
  }

  ngOnInit() {
    this.plateauService.getPlateauDimensions()
      .subscribe(response => {
      this.wire = this.calculateWireframe(response.dimensionY, response.dimensionX);
    })

    this.getRovers();
  }

  createMatrix = (m: number, n: number) => {
    let [row, column]: any = [[], []],
      rowColumn = m * n;
    for (let i = 1; i <= rowColumn; i++) {
      column.push(i)
      if (i % n === 0) {
        row.push(column)
        column = []
      }
    }
    return row
  }

  calculateWireframe = (rows: number, columns: number) => {
    const wireframe = [];
    const lines: any[] = [];
    for (let dimensionX = 0; dimensionX < rows; dimensionX++) {
      lines[dimensionX] = [];
      for (let dimensionY = 0; dimensionY < columns; dimensionY++) {
        lines[dimensionX].push({dimensionX, dimensionY});
      }
      wireframe.push(lines[dimensionX]);
    }
    return wireframe.reverse();
  }

  getRovers = () => {
    this.selectedRover = undefined;
    this.roverService.getPositions().subscribe(data => this.rovers = data.rovers)
  };

  onSelectedRover = (roverId: number) => {
    this.selectedRover = this.rovers.find(rover => rover.id == roverId);
  }

  selectCell = (cell: any) => {
    console.log('selected cell', cell);
  }

  onDeployFormSubmitted = (form: any) => {
    const observer = {
      next: (x: any) => this.getRovers(),
      error: (err: any) => alert(err.error.message),
      complete: () => console.log('Observer got a complete notification'),
    }
    this.roverService.deployRover(form).subscribe(observer);
  }

  onPathFormSubmitted = (form: any) => {
    return this.selectedRover?.id === undefined ? '' :
    this.roverService.getDestinationPath(this.selectedRover?.id, form).subscribe(data => this.destinationPath = data.commands)
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PlateauGetDimensionsResponse} from "../../shared/models/plateau";
import {PlateauService} from "../../core/services/plateau.service";

@Component({
  selector: 'app-expedition-grid',
  templateUrl: 'expedition-grid.component.html',
  styleUrls: ['expedition-grid.component.scss']
})

export class ExpeditionGridComponent implements OnInit {
  gridDimensionsForm: FormGroup;
  plateau: PlateauGetDimensionsResponse;

  constructor(private fb: FormBuilder, private router: Router, private plateauService: PlateauService) {}

  ngOnInit() {
    this.gridDimensionsForm = this.fb.group({
      rows: [0,[ Validators.required, Validators.min(1), Validators.max(100)]],
      columns: [0,[ Validators.required, Validators.min(1), Validators.max(100)]]
    });
  }

  applyGridDimensions = () => {
    const {rows, columns} = this.gridDimensionsForm.value;

    this.plateauService.setPlateauDimensions({dimensionX: rows, dimensionY: columns}).subscribe(res => this.router.navigate([`/expedition`]));

  }

  onApplyButtonClicked = (event: any) => {
    this.applyGridDimensions();
  }
}

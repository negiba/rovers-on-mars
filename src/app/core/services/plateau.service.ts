import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlateauGetDimensionsResponse, PlateauSetDimensionsRequest} from "../../shared/models/plateau";
import {ENDPOINTS} from "../../configs/backend";

@Injectable({
  providedIn: 'root'
})
export class PlateauService {

  constructor(private httpClient: HttpClient) {}

  getPlateauDimensions = (): Observable<PlateauGetDimensionsResponse> => {
    return this.httpClient.get<PlateauGetDimensionsResponse>(`${ENDPOINTS.plateau.getDimensions}`);
  }

  setPlateauDimensions = (dimensions: PlateauSetDimensionsRequest): Observable<PlateauSetDimensionsRequest> => {
    return this.httpClient.put<PlateauSetDimensionsRequest>(`${ENDPOINTS.plateau.setDimensions}`, dimensions );
  }
}

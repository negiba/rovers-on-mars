import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {BASE_URL, ENDPOINTS} from "../../configs/backend";
import {catchError, Observable, of, throwError} from "rxjs";
import {
  RoverComputePathRequest,
  RoverComputePathResponse,
  RoverDeployRequest,
  RoverDeployResponse,
  RoverGetPositionsResponse,
  RoverResponse
} from "../../shared/models/rover";

@Injectable({
  providedIn: 'root'
})
export class RoverService {
  constructor(private httpClient: HttpClient) {}

  getPositions = (): Observable<RoverGetPositionsResponse> => {
    return this.httpClient.get<RoverGetPositionsResponse>(`${ENDPOINTS.rover.getPositions}`);
  }

  deployRover = (rover: RoverDeployRequest): Observable<RoverDeployResponse> => {
    return this.httpClient.post<RoverDeployResponse>(`${ENDPOINTS.rover.deploy}`, rover).pipe(catchError(err => throwError(err)));
  }

  executeCommands = (roverId: number, commands: string): Observable<RoverResponse> => {
    return this.httpClient.put<RoverResponse>(`${ENDPOINTS.rover.execute}/${roverId}`, {commands}).pipe(catchError(err => throwError(err)));
  }

  getDestinationPath = (roverId: number, destination: RoverComputePathRequest) : Observable<RoverComputePathResponse> => {
    return this.httpClient.post<RoverComputePathResponse>(`${ENDPOINTS.rover.computePath}/${roverId}`, destination).pipe(catchError(err => throwError(err)));
  }
}

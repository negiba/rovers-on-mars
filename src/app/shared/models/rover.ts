export interface RoverComputePathRequest {
  destinationCoordinateX: number;
  destinationCoordinateY: number;
}

export interface RoverComputePathResponse {
  commands: string;
}

export interface RoverDeployRequest {
  direction: string;
  positionX: number;
  positionY: number;
}

export interface RoverDeployResponse {
  roverId: number;
}

export interface RoverExecuteRequest {
  commands: string;
}

export interface RoverGetPositionsResponse {
  rovers: RoverResponse[];
}

export interface RoverResponse {
  direction: string;
  id: number;
  positionX: number;
  positionY: number;
}

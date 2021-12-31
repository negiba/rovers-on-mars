export const BASE_URL = 'http://localhost:8080';

export const ENDPOINTS = {
  plateau: {
    getDimensions: 'rest/plateau/get-dimensions',
    setDimensions: 'rest/plateau/set-dimensions'
  },
  rover: {
    computePath: 'rest/rover/compute-path',
    deploy: 'rest/rover/deploy',
    execute: 'rest/rover/execute',
    getPosition: 'rest/rover/get-position/',
    getPositions: 'rest/rover/get-positions',
    remove: 'rest/rover/remove'
  }
}

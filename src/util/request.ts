import axios from 'axios';
import { config } from '../config/env';
import { SpaceObject } from '../model/SpaceObject';
import { CoordinateTree } from '../model/CoordinateTree';

export async function getGoalCoordinates(): Promise<CoordinateTree> {
    return axios.get(`https://challenge.crossmint.io/api/map/${config.STUDENT_ID}/goal`)
        .then(function (response) {
            return response.data.goal;
        })
}

export async function createPolyanets(operation: SpaceObject) {
    return axios.post(`https://challenge.crossmint.io/api/polyanets?candidateId=${config.STUDENT_ID}`, { row: operation.row, column: operation.column, candidateId: config.STUDENT_ID })
}

export async function createSoloon(operation: SpaceObject) {
    return axios.post(`https://challenge.crossmint.io/api/soloons?candidateId=${config.STUDENT_ID}`, { row: operation.row, column: operation.column, candidateId: config.STUDENT_ID, color: operation.specification })
}

export async function createCometh(operation: SpaceObject) {
    return axios.post(`https://challenge.crossmint.io/api/comeths?candidateId=${config.STUDENT_ID}`, { row: operation.row, column: operation.column, candidateId: config.STUDENT_ID, direction: operation.specification })
}

export async function deletePolyplanets(operation: SpaceObject) {
    return axios.delete(`https://challenge.crossmint.io/api/polyanets?candidateId=${config.STUDENT_ID}`, {

        data: { row: operation.row, column: operation.column, candidateId: config.STUDENT_ID }
    })
}

export async function deleteCometh(operation: SpaceObject) {
    return axios.delete(`https://challenge.crossmint.io/api/comeths?candidateId=${config.STUDENT_ID}`, {

        data: { row: operation.row, column: operation.column, candidateId: config.STUDENT_ID }
    })
}

export async function deleteSoloon(operation: SpaceObject) {
    return axios.delete(`https://challenge.crossmint.io/api/soloons?candidateId=${config.STUDENT_ID}`, {

        data: { row: operation.row, column: operation.column, candidateId: config.STUDENT_ID }
    })
}

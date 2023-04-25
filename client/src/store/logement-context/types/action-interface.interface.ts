import { ActionTypes } from "./actions-types.enum";

export interface ActionInterface {
    type: ActionTypes,
    payload: any
}
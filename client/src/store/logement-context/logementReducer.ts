import { LogementContextInterface } from "./types/logement-context.interface";
import { ActionTypes } from "./types/actions-types.enum";
import { ActionInterface } from "./types/action-interface.interface";
import { logementInitialStateType } from "./types/initial-state.interface";

const logementReducer = (state: logementInitialStateType, action: ActionInterface) => {
    const { type, payload } = action;
    switch (action.type) {
        case ActionTypes.GET_LOGEMENTS:
            return {
                ...state,
                logements: action.payload,
                loading: false
            }
        case ActionTypes.GET_LOGEMENT:
            return {
                ...state,
                logement: action.payload,
                loading: false
            }
        case ActionTypes.SET_ERRORS:
            return {
                ...state,
                errors: action.payload,
                loading: false
            }

        default:
            return state;
    }
}

export default logementReducer;


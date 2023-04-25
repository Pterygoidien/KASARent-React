import { useReducer, FC, ReactNode } from 'react';
import LogementReducer from './logementReducer';
import LogementContext from './logementContext';
import { getLogement as getLogementProvider, getLogements as getLogementsProvider } from './logementActions';
import { ActionTypes } from './types/actions-types.enum';
import { logementInitialStateType } from './types/initial-state.interface';


interface Props {
    children: ReactNode;
}

const LogementProvider: FC<Props> = ({ children }: Props) => {

    const initialState: logementInitialStateType = {
        logements: [],
        logement: null,
        loading: true,
    }
    const [state, dispatch] = useReducer(LogementReducer, initialState);

    const getLogements = async (): Promise<any> => {
        try {
            const res = await getLogementsProvider();
            dispatch({
                type: ActionTypes.GET_LOGEMENTS,
                payload: res,
            });
        }
        catch (err) {
            throw err;
        }

    }
    const getLogement = async (id: string): Promise<any> => {
        try {
            console.log('function called')
            const res = await getLogementProvider(id);
            dispatch({
                type: ActionTypes.GET_LOGEMENT,
                payload: res,
            });
        }
        catch (err) {
            throw err;
        }
    }

    return (
        <LogementContext.Provider value={{
            logements: state.logements,
            logement: state.logement,
            loading: state.loading,
            getLogements,
            getLogement
        }}>
            {children}
        </LogementContext.Provider>
    );
};


export default LogementProvider;



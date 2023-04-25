import { Logement } from "../../../utils/types/logement.type";


export interface LogementContextInterface {
    logements: Logement[] | [];
    logement: Logement | null,
    loading: boolean,
    errors: [] | null,
    getLogements: () => void,
    getLogement: (id: string) => void,
}
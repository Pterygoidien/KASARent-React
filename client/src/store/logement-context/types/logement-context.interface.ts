import { Logement } from "../../../utils/types/logement.type";


export interface LogementContextInterface {
    logements: Logement[] | [];
    logement: Logement | null,
    loading: boolean,
    errors: [] | null,
    getLogements: () => {},
    getLogement: (id: string) => {},
}
import { Logement } from "../../../utils/types/logement.type"

export type logementInitialStateType = {
    logements: Logement[] | [],
    logement: Logement | null,
    loading: boolean,
}
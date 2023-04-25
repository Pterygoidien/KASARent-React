import { Logement } from "../../utils/types/logement.type";

const API_URL = "http://localhost:5000"; // process.ENV.API_URL
const fetchParams = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

// With GET function and a single parameter change, one could merge both functions invoking anonymous function when defining the URL target
// such as : 
// const fetch = id ? `${API_URL}/logements/${id}` : `${API_URL}/logements`; 
// and then using fetchParams as a parameter for the fetch function
// Because things can change over time, I prefer to keep the two functions separate (Separation of Concerns is important to maintain)

/**
 * Get all logements
 * @returns {Promise<Logement[]>}
 */

export const getLogements = async (): Promise<Logement[]> => {
    try {
        const res = await fetch(`${API_URL}/logements`, fetchParams);
        const data = await res.json();
        return data as Logement[];
    }
    catch (error) {
        throw error;
    }
}
/**
 * Get a single logement
 * @param {string} id
 * @returns {Promise<Logement>} 
 */
export const getLogement = async (id: string): Promise<Logement> => {

    try {
        const res = await fetch(`${API_URL}/logements/${id}`, fetchParams);
        const data = await res.json();
        return data as Logement;
    }
    catch (error) {
        throw error;
    }
}

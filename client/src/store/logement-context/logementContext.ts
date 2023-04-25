import { Dispatch, createContext } from 'react';
import { LogementContextInterface } from './types/logement-context.interface';


const logementContext = createContext<LogementContextInterface | null>(null);

export default logementContext;


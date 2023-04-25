import { FC } from 'react';
import "./assets/scss/main.scss";
import LogementProvider from './store/logement-context/LogementProvider';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import AppRoutes from './views/routes';

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* Bien qu'il soit courant de mettre les context API Providers à la racine, il faut en réalité les nester le plus profondément possible, car ils affectent le re-render des éléments children */}
        <LogementProvider>
          <AppRoutes />
        </LogementProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

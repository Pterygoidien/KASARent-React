import Logo from '../Logo.jsx';
import { FC } from 'react';
import { useLocation } from 'react-router';

import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: FC = (): JSX.Element => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <header>
      <div className="container flex justify-between items-center">
        <Link to="./">
          <Logo fill="#FF6060" style={styles['logo']} />
        </Link>
        <nav>
          <ul className="flex justify-between">
            <li>
              <Link
                to="./"
                className={location.pathname === '/' ? 'active' : 'inactive'}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="./a-propos"
                className={
                  location.pathname === '/a-propos' ? 'active' : 'inactive'
                }
              >
                A propos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

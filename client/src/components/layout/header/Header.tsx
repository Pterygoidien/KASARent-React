import Logo from '../Logo.jsx';
import { FC } from 'react';

import { Link } from 'react-router-dom';
import './Header.module.scss';

const Header: FC = (): JSX.Element => <header>
    <div className="container flex justify-between items-center">
        <Link to="./">
            <Logo fill="#FF6060" /></Link>
        <nav>
            <ul className="flex justify-between">
                <li><Link to="./">Accueil</Link></li>
                <li><Link to="./a-propos">A propos</Link></li>
            </ul>
        </nav>
    </div>
</header>

export default Header;
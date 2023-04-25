import { FC } from "react";
import Logo from "../Logo";
import "./Footer.scss";

const Footer: FC = (): JSX.Element => {
    return (
        <footer>
            <div className="container flex flex-col justify-between items-center py-3 gap-7">

                <Logo fill="#ffffff" />
                <p>© 2020 Kasa. All rights reserved </p>

            </div>
        </footer>
    )
}

export default Footer;
import styles from './Accordion.module.scss';
import Arrow from '../arrow/Arrow';
import Button from '../button/Button';
import { FC, useState } from 'react';



interface AccordionProps {
    titre: string;
    children: JSX.Element | React.ReactNode;
    defaultOpen?: boolean;
}



const Accordion: FC<AccordionProps> = ({ titre, children, defaultOpen = true }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }


    return (<article className={styles.accordion}>
        <Button
            className="text-left w-full flex items-center justify-between"
            onClick={toggleOpen}
        >
            <h2>{titre}</h2>
            <Arrow />
        </Button>
        <div className={`${styles.accordion__content} rounded-b-xl ${isOpen ? styles.open : ''}`}>

            {children}
        </div>
    </ article >);
}

Accordion.defaultProps = {
    titre: 'Aucun titre',
    children: <p>Aucun contenu</p>,
    defaultOpen: true
}

export default Accordion;

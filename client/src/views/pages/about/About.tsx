

import { FC } from 'react';
import Accordion from '../../../components/common/accordion/Accordion';
import Banner from '../../../components/common/banner/Banner';
import styles from './About.module.scss'



const About: FC = (): JSX.Element => {
    return (
        <main className="container">

            <Banner />
            <div className={`${styles.showcase} mx-auto flex flex-col gap-6`}>
                <Accordion titre="Fiabilité">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </Accordion>
                <Accordion titre="Respect">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Accordion>
                <Accordion titre="Service">
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </Accordion>
                <Accordion titre="Sécurité"><p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>

                </Accordion>
            </div>
        </main>
    )
}

export default About;
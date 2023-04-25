import { FC } from "react";
import styles from "./Error404.module.scss";
const Error404: FC = () => {
    return (
        <main className="container text-center flex flex-col justify-around">
            <section className={styles.error}>
                <h1>404</h1>
                <h2>
                    Oups! La page que vous demandez n'existe pas
                </h2>
            </section>
            <section className="goback">Retourner sur la page d'accueil</section>


        </main>
    )
}

export default Error404
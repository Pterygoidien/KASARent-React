import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";



import styles from "./Logement.module.scss";
import Button from "../../../components/common/button/Button";
import Carousel from "../../../components/common/carousel/Carousel";
import Accordion from "../../../components/common/accordion/Accordion";
import Rating from "../../../components/common/rating/Rating";
import LogementContext from "../../../store/logement-context/logementContext";
import Spinner from "../../../components/layout/Spinner";



const Logement = () => {
    const id = useParams().id;
    const logementContext = useContext(LogementContext);
    const navigate = useNavigate();
    //can't destructure logementContext {getLogement, logement, loading} = logementContext, because it's null at first. 


    useEffect(() => {
        id && logementContext?.getLogement(id)
        // eslint-disable-next-line
    }, []);

    if (logementContext?.loading) return <Spinner />
    if (!logementContext?.loading && !logementContext?.logement) {
        navigate('/404', { replace: true }); //or use "redirect"
    }
    return (
        <main className="container">
            {logementContext?.logement && (
                <>
                    <Carousel pictures={logementContext?.logement.pictures} />
                    <div className="flex flex-expand items-center">
                        <section className="rental-highlight flex flex-col gap-4">
                            <h1>
                                {logementContext?.logement.title}
                            </h1>
                            <h2>
                                {logementContext?.logement.location}
                            </h2>
                            <div className="flex justify-start gap-4 ">
                                {logementContext?.logement.tags && logementContext?.logement.tags.map((tag) => (
                                    <Button key={tag}>{tag}</Button>

                                ))}
                            </div>

                        </section>
                        <section className={`${styles['rental-infos']} flex justify-between items-center`}>
                            <div className="rental-infos__rating flex grow">

                                <Rating value={logementContext?.logement.rating} />
                            </div>
                            <div className="rental-infos__author flex">
                                <div className="flex flex-col justify-center items-end gap-2">
                                    {logementContext?.logement.host.name.split(" ").map((name) => (
                                        <span key={name}>{name}</span>
                                    ))
                                    }

                                </div>
                                <div className={styles['author__picture']}>
                                    <img src={logementContext?.logement.host.picture} alt={logementContext?.logement.host.name} />
                                </div>


                            </div>
                        </section>
                    </div>

                    <section className={`${styles['rental-accordions']} flex flex-responsive items-stretch gap-4`}>
                        <Accordion titre="Description"><p>{logementContext?.logement.description}</p></Accordion>
                        <Accordion titre="Equipements">
                            {logementContext?.logement?.equipments ? (
                                <ul className="p-1">
                                    {logementContext?.logement.equipments.map((equipment) => {
                                        return (<li key={equipment}>{equipment}</li>)
                                    })}
                                </ul>) : 'Aucun équipement'}
                        </Accordion>
                    </section>
                </>)}
        </main>
    )
}

export default Logement;

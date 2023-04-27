import { useParams, useNavigate } from "react-router-dom";
import { FC, useContext, useEffect, useState } from "react";
import styles from "./Logement.module.scss";
import Button from "../../../components/common/button/Button";
import Carousel from "../../../components/common/carousel/Carousel";
import Accordion from "../../../components/common/accordion/Accordion";
import Rating from "../../../components/common/rating/Rating";
import LogementContext from "../../../store/logement-context/logementContext";
import Spinner from "../../../components/layout/Spinner";
import Error404 from "../errors/Error404";


const LogementPage: FC = () => {
    const id = useParams().id;
    const logementContext = useContext(LogementContext);
    const navigate = useNavigate();
    //can't destructure logementContext {getLogement, logement, loading} = logementContext, because it's null at first. 

    useEffect(() => {
        id && logementContext?.getLogement(id)
        // eslint-disable-next-line

    }, []);

    useEffect(() => {
        if (!logementContext?.loading && logementContext?.errors) {
            console.log(logementContext)
            navigate('/404', {
                replace: true,

            }); //or use "redirect"
        }


        // eslint-disable-next-line
    }, [logementContext?.errors])

    if (logementContext?.loading) return (<Spinner />)
    if (logementContext?.logement && !logementContext.loading) {
        const { title, location, pictures, tags, rating, host, description, equipments } = logementContext.logement; //destructuring logementContext.logement once we've checked that it's not null
        return (
            <main className="container">
                {logementContext?.logement && (
                    <>
                        <Carousel pictures={pictures} />
                        <div className={styles['rental-general']}>
                            <section className="rental-highlight flex flex-col gap-4">
                                <h1>
                                    {title}
                                </h1>
                                <h2>
                                    {location}
                                </h2>
                                <div className="flex justify-start gap-4 ">
                                    {tags && tags.map((tag) => (
                                        <Button key={tag}>{tag}</Button>
                                    ))}
                                </div>

                            </section>
                            <section className={styles['rental-infos']}>
                                <div className="rental-infos__rating flex grow">

                                    <Rating value={rating} />
                                </div>
                                <div className="rental-infos__author flex">
                                    <div className="flex flex-col justify-center items-end gap-2">
                                        {host.name.split(" ").map((name) => (
                                            <span key={name}>{name}</span>
                                        ))
                                        }

                                    </div>
                                    <div className={styles['author__picture']}>
                                        <img src={host.picture} alt={host.name} />
                                    </div>


                                </div>
                            </section>
                        </div>

                        <section className={`${styles['rental-accordions']} flex flex-responsive items-stretch gap-4`}>
                            <Accordion titre="Description" defaultOpen={false}><p>{description}</p></Accordion>
                            <Accordion titre="Equipements" defaultOpen={false}>
                                {equipments ? (
                                    <ul className="p-1">
                                        {equipments.map((equipment) => {
                                            return (<li key={equipment}>{equipment}</li>)
                                        })}
                                    </ul>) : 'Aucun équipement'}
                            </Accordion>
                        </section>
                    </>)}
            </main>
        )
    }
    return <Error404 />

}

export default LogementPage;

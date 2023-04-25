import { Link } from "react-router-dom";
import styles from "./GalleryArticle.module.scss";
import styled from "styled-components";
import { Logement } from "../../../utils/types/logement.type";
import { FC } from "react";

interface GalleryArticleProps {
    data: Logement
}

interface ArticleWrapperProps {
    imageUrl: string
}

const ArticleWrapper = styled.div<ArticleWrapperProps>`
article {background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%),  
    url(${props => props.imageUrl});}`


const GalleryArticle: FC<GalleryArticleProps> = ({ data }: GalleryArticleProps): JSX.Element => {
    const { id, title } = data;
    return (
        <ArticleWrapper imageUrl={data.cover}>
            <Link to={`./logements/${id}`}>
                <article className={styles.item}>
                    <h2>{title}</h2>

                </article>
            </Link>
        </ArticleWrapper>
    )
}
export default GalleryArticle;
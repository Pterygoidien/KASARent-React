import { FC, useState } from "react";
import styles from "./Carousel.module.scss";
import Arrow from "../arrow/Arrow";
import styled from "styled-components";

interface CarouselProps {
    pictures: string[];
}

interface SlideshowIndexProps {
    current: number;
}

const SlideshowIndex = styled.div<SlideshowIndexProps>`
.slideshow {
    transform: translateX(-${(props) => props.current * 100}%);
    transition: transform 0.5s ease-in-out;
    width:100%;
}`


const Carousel: FC<CarouselProps> = ({ pictures }): JSX.Element => {
    const [current, setCurrent] = useState(0);
    const prevHandler = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    }
    const nextHandler = () => {
        if (current < pictures.length - 1) {
            setCurrent(current + 1);
        }
    }

    return (
        <SlideshowIndex current={current}>
            <section className={`${styles.carousel}`}>
                <div className="slideshow flex nowrap gap-0">
                    {pictures.map((picture) => (<img key={picture} src={picture} alt="logement" />
                    ))}
                </div>
                <div className={`${styles.prev} ${(current <= 0) ? 'hidden' : ''}`} onClick={prevHandler}>
                    <Arrow />
                </div>
                <div className={`${styles.next} ${(current >= (pictures.length - 1)) ? 'hidden' : ''}`} onClick={nextHandler}>
                    <Arrow />
                </div>
            </section>
        </SlideshowIndex>
    );
}

export default Carousel;


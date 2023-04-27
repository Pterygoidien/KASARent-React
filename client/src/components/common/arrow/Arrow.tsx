import { FC } from "react";

type ArrowProps = {
    direction?: number
}




const Arrow: FC<ArrowProps> = ({ direction = 0 }) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" transform={`rotate(${direction})`}><path d="M480 712 240 472l43-43 197 197 197-197 43 43-240 240Z" /></svg>)

}

export default Arrow;
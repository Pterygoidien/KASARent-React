import styles from './Button.module.scss';
import { FC } from 'react';


interface ButtonProps {

    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}



const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
    return (
        <button onClick={onClick} className={`${styles.btn} p-1 ${className} `}>
            {children}
        </button>
    );
}
export default Button;
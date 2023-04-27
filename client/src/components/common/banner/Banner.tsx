import { FC } from 'react';
import styles from './Banner.module.scss';

const Banner: FC = (): JSX.Element => {
  return (
    <section className={styles.banner}>
      <h1 className="flex wrap justify-start text-white">
        <span className="part1">Chez vous, </span>
        <span className="part2">partout et ailleurs</span>
      </h1>
    </section>
  );
};

export default Banner;

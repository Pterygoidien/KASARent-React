
import { FC } from 'react';
import styles from './Home.module.scss'
import Banner from '../../../components/common/banner/Banner';
import Gallery from '../../../components/common/gallery/Gallery';

const Home: FC = (): JSX.Element => {
    return (
        <main className={`container ${styles.home}`}>
            <Banner />
            <Gallery />
        </main>
    );
}
export default Home;
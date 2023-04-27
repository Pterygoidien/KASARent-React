import GalleryArticle from './GalleryArticle';
import { useEffect } from 'react';
import { useContext } from 'react';
import LogementContext from '../../../store/logement-context/logementContext';
import Spinner from '../../layout/Spinner';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const { logements, getLogements, loading } = useContext(LogementContext);

  //On react Strict Mode, useEffect depending on an empty array is called twice on first render : two API calls
  useEffect(() => {
    getLogements();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;
  return (
    <section
      className={`${styles.gallery} rounded-2xl items flex gap-10 flex-expand flex-center`}
    >
      {logements &&
        logements.map((logement) => (
          <GalleryArticle key={logement.id} data={logement} />
        ))}
    </section>
  );
};
export default Gallery;

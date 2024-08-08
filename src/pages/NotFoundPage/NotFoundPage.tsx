import Header from '@components/Header';
import React from 'react';
import styles from './NotFoundPage.module.scss';
import NotFoundCat from '@assets/img/catNotFound.png';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Header />
      <section className={styles.notFoundPage}>
        <h1 className={styles.notFoundPage__text}>404 Error</h1>
        <img src={NotFoundCat} alt='404 Not Found' className={styles.notFoundPage__icon} />
      </section>
    </>
  );
};

export default NotFoundPage;

import Header from '@components/Header';
import React from 'react';
import styles from './HomePage.module.scss';
import ScheduleForm from './ScheduleForm';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <section className={styles.homePage}>
        <ScheduleForm />
      </section>
    </>
  );
};

export default HomePage;

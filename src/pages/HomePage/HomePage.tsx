import Header from '@components/Header';
import React from 'react';
import styles from './HomePage.module.scss';
import ScheduleForm from './ScheduleForm';
import Meetings from './Meetings';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <section className={styles.homePage}>
        <Meetings />
        <ScheduleForm />
      </section>
    </>
  );
};

export default HomePage;

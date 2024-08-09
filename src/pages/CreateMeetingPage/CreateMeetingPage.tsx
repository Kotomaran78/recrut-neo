import Header from '@components/Header';
import React from 'react';
import styles from './CreateMeetingPage.module.scss';
import Create from './Create';

const CreateMeetingPage: React.FC = () => {
  return (
    <>
      <Header />
      <section className={styles.createMeetingPage}>
        <Create />
      </section>
    </>
  );
};

export default CreateMeetingPage;

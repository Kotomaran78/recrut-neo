import React from 'react';
import styles from './ProfilePage.module.scss';
import Profile from './Profile';
import Header from '@components/Header';

const ProfilePage: React.FC = () => {
  return (
    <>
      <Header />
      <section className={styles.profilePage}>
        <Profile />
      </section>
    </>
  );
};

export default ProfilePage;

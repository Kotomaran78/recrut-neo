
import React from 'react';
import styles from './LoginPage.module.scss';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
  return (
    <section className={styles.loginPage}>
      <LoginForm />
    </section>
  );
};

export default LoginPage;

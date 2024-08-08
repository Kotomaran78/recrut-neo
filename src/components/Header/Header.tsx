import React from 'react';
import { useAuth } from '@context/AuthContext';
import styles from './Header.module.scss';
import iconProfile from '@assets/svg/cat-profile.svg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { logout, userName, userRole } = useAuth();

  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Link className={styles.header__logo} to='/'>
          Привет {userName}, твоя роль: {userRole}
        </Link>
        <div className={styles.header__profileMenu}>
          <Link className={styles.header__iconProfile} to='/profile'>
            <img src={iconProfile} alt='Иконка профиля - кот' className={styles.header__img} />
          </Link>
          <button className={styles.header__logoutButton} onClick={logout}>
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

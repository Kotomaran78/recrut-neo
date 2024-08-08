import React, { useState } from 'react';
import styles from './Profile.module.scss';
import { useAuth } from '@context/AuthContext';

const Profile: React.FC = () => {
  const [uName, setUName] = useState('');
  const [error, setError] = useState('');
  const { userName, userRole, userEmail, login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (uName.trim() === '') {
      setError('Имя не может быть пустым');
      return;
    }
    if (uName.toLowerCase() === userName.toLowerCase()) {
      setError('Новое имя не должно совпадать с текущим');
      return;
    }

    setError('');
    login(uName, userRole, userEmail);
  };

  return (
    <section className={styles.profile}>
      <form className={styles.profile__form} onSubmit={handleSubmit}>
        <h2 className={styles.profile__title}>Настройки профиля</h2>
        <div className={styles.profile__formItem}>
          <label className={styles.profile__label}>Имя</label>
          <input
            className={styles.profile__input}
            type='text'
            value={uName}
            onChange={(e) => setUName(e.target.value)}
            placeholder={userName}
          />
          {error && <p className={styles.profile__error}>{error}</p>}
        </div>
        <div className={styles.profile__formItem}>
          <p className={styles.profile__item}>Email </p>
          <p className={styles.profile__email}>{userEmail}</p>
        </div>
        <div className={styles.profile__buttonWrapper}>
          <button className={styles.profile__buttonSubmit} type='submit'>
            Изменить
          </button>
        </div>
      </form>
    </section>
  );
};

export default Profile;

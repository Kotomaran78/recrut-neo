// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '@context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.scss';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('/auth', { username, password });
      const token = response.data.token;
      login(token);
      navigate('/'); // Перенаправление на главную страницу после входа
    } catch (error) {
      console.error('Login failed\n', error);
    }
  };

  return (
      <div className={styles.loginPage__content}>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={styles.loginPage__label}>
              Username:
              <input
                className={styles.loginPage__input}
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className={styles.loginPage__label}>
              Password:
              <input
                className={styles.loginPage__input}
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button className={styles.loginPage__buttonSubmit} type='submit'>
            Login
          </button>
        </form>
      </div>
  );
};

export default LoginForm;

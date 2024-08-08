// // src/pages/loginForm.tsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '@context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import styles from './LoginForm.module.scss';

// const LoginForm: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('/auth', { username, password });
//       const token = response.data.token;
//       login(token);
//       navigate('/'); // Перенаправление на главную страницу после входа
//     } catch (error) {
//       console.error('Login failed\n', error);
//     }
//   };

//   return (
//       <div className={styles.loginForm__content}>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label className={styles.loginForm__label}>
//               Username
//             </label>
//               <input
//                 className={styles.loginForm__input}
//                 type='text'
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//           </div>
//           <div>
//             <label className={styles.loginForm__label}>
//               Password
//             </label>
//               <input
//                 className={styles.loginForm__input}
//                 type='password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//           </div>
//           <button className={styles.loginForm__buttonSubmit} type='submit'>
//             Login
//           </button>
//         </form>
//       </div>
//   );
// };

// export default LoginForm;

// src/pages/loginForm.tsx
import React, { useEffect, useState } from 'react';
import { useAuth } from '@context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.scss';

const LoginForm: React.FC = () => {
  const [uName, setUName] = useState('');
  const [uRole, setURole] = useState('');
  const [uEmail, setUEmail] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      login(uName, uRole, uEmail);
      navigate('/');
    } catch (error) {
      console.error('Login failed\n', error);
    }
  };

  const roles = ['Кандидат', 'Эксперт', 'Рекрутер', 'Админ'];

  return (
    <section className={styles.loginForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.loginForm__formItem}>
          <label className={styles.loginForm__label}>Имя</label>
          <input
            className={styles.loginForm__input}
            type='text'
            value={uName}
            onChange={(e) => setUName(e.target.value)}
            required
          />
        </div>
        <div className={styles.loginForm__formItem}>
          <label className={styles.loginForm__label}>Почта</label>
          <input
            className={styles.loginForm__input}
            type='email'
            value={uEmail}
            onChange={(e) => setUEmail(e.target.value)}
            placeholder='xxx@xx.xx'
            required
          />
        </div>
        <div className={styles.loginForm__formItem}>
          <label className={styles.loginForm__label}>Роль</label>
          <select
            className={styles.loginForm__select}
            value={uRole}
            onChange={(e) => setURole(e.target.value)}
            required
          >
            <option value='' disabled>
              Выберите роль
            </option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.loginForm__buttonWrapper}>
          <button className={styles.loginForm__buttonSubmit} type='submit'>
            Войти
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;

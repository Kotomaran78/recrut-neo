// // src/context/AuthContext.tsx
// import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
// import Cookies from 'js-cookie';
// import axios from 'axios';

// interface AuthContextType {
//   isAuthenticated: boolean;
//   login: (token: string) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Проверяем наличие токена в куки при монтировании
//     const token = Cookies.get('token');
//     if (token) {
//       setIsAuthenticated(true);
//       // Можно также сделать запрос для валидации токена или получения данных пользователя
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     }
//   }, []);

//   const login = (token: string) => {
//     Cookies.set('token', token, { expires: 7, secure: true }); // Сохраняем токен в куки на 7 дней, secure - только https запросы
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     Cookies.remove('token'); // Удаляем токен из куки
//     delete axios.defaults.headers.common['Authorization'];
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// src/context/AuthContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (uName: string, uRole: string, uEmail: string) => void;
  logout: () => void;
  userName: string;
  userRole: string;
  userEmail: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [userName, setUserName] = useState('');
  // const [userRole, setUserRole] = useState('');

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('isAuthenticated');
  });
  const [userName, setUserName] = useState(() => localStorage.getItem('userName') || '');
  const [userRole, setUserRole] = useState(() => localStorage.getItem('userRole') || '');
  const [userEmail, setUserEmail] = useState(() => localStorage.getItem('userEmail') || '');

  // useEffect(() => {
  //   const name = Cookies.get('userName');
  //   const role = Cookies.get('userRole');

  //   console.log(name , role);

  //   if (name && role) {

  //     setIsAuthenticated(true);
  //     setUserName(name);
  //     setUserRole(role);
  //   }
  // }, []);

  const login = (uName: string, uRole: string, uEmail: string) => {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userName', uName);
    localStorage.setItem('userRole', uRole);
    localStorage.setItem('userEmail', uEmail);

    setIsAuthenticated(true);
    setUserName(uName);
    setUserRole(uRole);
    setUserEmail(uEmail);
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');

    setIsAuthenticated(false);
    setUserName('');
    setUserRole('');
    setUserEmail('');
  };

  // const login = (userName: string, userRole: string) => {
  //   Cookies.set('userName', userName, { expires: 7, secure: true, sameSite: 'Lax' }); // Сохраняем токен в куки на 7 дней, secure - только https запросы
  //   Cookies.set('userRole', userRole, { expires: 7, secure: true, sameSite: 'Lax' }); // Сохраняем токен в куки на 7 дней, secure - только https запросы

  //   setIsAuthenticated(true);
  //   setUserName(userName);
  //   setUserRole(userRole);
  // };

  // const logout = () => {
  //   Cookies.remove('userName');
  //   Cookies.remove('userRole');
  //   setIsAuthenticated(false);
  //   setUserName('');
  //   setUserRole('');
  // };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userName, userRole, userEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import ProfilePage from '@pages/ProfilePage';
import NotFoundPage from '@pages/NotFoundPage';
import CreateMeetingPage from '@pages/CreateMeetingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: '',
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/create-meeting',
        element: (
          <ProtectedRoute>
            <CreateMeetingPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: (
          <ProtectedRoute>
            <NotFoundPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;

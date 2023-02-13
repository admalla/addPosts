import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import { Error } from '../pages/Error';
import { Login } from '../pages/Login';
import { privateRoutes, publicRoutes } from '../router';

export function AppRouters() {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route path="*" element={<Error />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Error } from '../pages/Error';
import { routes } from '../router';

export function AppRouters() {
  return (
    <Routes>
      {/* <Route path="/posts" element={<Posts />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts/:id" element={<PageIdPost />} /> */}
      {routes.map((route) => (
        <Route element={<route.element />} path={route.path} />
      ))}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

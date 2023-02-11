import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from '../pages/About';
import { Error } from '../pages/Error';
import { PageIdPost } from '../pages/PageIdPost';
import { Posts } from '../pages/Posts';

export function AppRouters() {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts/:id" element={<PageIdPost />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

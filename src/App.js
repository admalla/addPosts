import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/UI/NavBar/NavBar';
import { About } from './pages/About';
import { Error } from './pages/Error';
import { Posts } from './pages/Posts';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

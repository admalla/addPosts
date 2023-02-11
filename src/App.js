import React from 'react';
import { AppRouters } from './components/AppRouters';
import { NavBar } from './components/UI/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <AppRouters />
    </div>
  );
}

export default App;

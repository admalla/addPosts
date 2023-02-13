import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouters } from './components/AppRouters';
import { NavBar } from './components/UI/NavBar/NavBar';
import { AuthContext } from './context';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <NavBar />
        <AppRouters />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

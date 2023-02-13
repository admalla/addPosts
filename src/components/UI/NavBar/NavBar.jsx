import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../Button/MyButton';

export function NavBar(props) {
  const { setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };
  return (
    <div className="navBar">
      <MyButton style={{ color: 'white' }} onClick={logout}>
        Выйти
      </MyButton>
      <div className="nav_Link">
        <Link to={'/posts'}>Posts</Link>
        <Link to={'/about'}>About</Link>
      </div>
    </div>
  );
}

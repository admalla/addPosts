import React, { useContext } from 'react';
import MyButton from '../components/UI/Button/MyButton';
import { MyInput } from '../components/UI/Input/MyInput';
import { AuthContext } from '../context';

export function Login(props) {
  const { setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };
  return (
    <div className="login">
      <h1>Авторизация пользователя</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="введите логин" />
        <MyInput type="password" placeholder="введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
}

import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log);
  };
  return (
    <>
      <Header />
      <div className="loginBox">
        <h1>Login</h1>
        <button type="button" onClick={onLogin}>
          Google
        </button>
        <button type="button" onClick={onLogin}>
          Github
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Login;

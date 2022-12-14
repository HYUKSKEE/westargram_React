import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  function handleInput({ target }) {
    setAccount({
      ...account,
      [target.name]: target.value,
    });
  }

  const linkHandle = () => {
    navigate(`./Main`, { replace: true });
  };

  const isValidate =
    account.email.includes("@") && account.password.length >= 5;

  return (
    <div className="container">
      <main className="loginDiv">
        <h1>westargram</h1>
        <form className="inputForm">
          <input
            name="email"
            type="email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={account.email}
            onChange={handleInput}
          />
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            value={account.password}
            onChange={handleInput}
          />
          {!isValidate ? (
            <Link to="/">
              <button id="login-button" className="submitButton">
                로그인
              </button>
            </Link>
          ) : (
            <button
              type="button"
              id="login-button"
              className="submitButton validated"
              onClick={linkHandle}
            >
              로그인
            </button>
          )}
        </form>
        <Link to={"/"} className="pwLink">
          비밀번호를 잊으셨나요?
        </Link>
      </main>
    </div>
  );
}

export default Login;

import React, { useState } from "react";

import classes from "./NetflixLoginModal.module.css";

import { Link } from "react-router-dom";

const NetflixLoginModal = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    console.log(enteredEmail);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    console.log(enteredPassword);
  };

  return (
    <div className={classes["login-box"]}>
      <h2>로그인</h2>

      <form className={classes.login}>
        {/* 여기를 이제 input component를 만들어서 값을 넘겨받을 수 있도록 설정해야함 */}

        <input
          type="email"
          id="email"
          placeholder="이메일 주소 또는 전화번호"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
        <input
          type="password"
          id="password"
          placeholder="비밀번호"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
        <button onClick={props.onLogin}>로그인</button>
        <div className={classes["checkbox-wrap"]}>
          <input
            type="checkbox"
            name="로그인 정보 저장"
            value="로그인 정보 저장"
          />
          <label for="로그인 정보 저장">로그인 정보 저장</label>
        </div>
        <h4>
          Netflix 회원이 아닌가요? <span>지금 가입하세요</span>
        </h4>
        <p>
          이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
          확인합니다.
        </p>
      </form>
    </div>
  );
};

export default NetflixLoginModal;

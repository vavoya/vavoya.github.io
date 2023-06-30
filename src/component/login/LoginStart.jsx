import React from "react";
import style from "./LoginStart.module.css";

export default function LoginStart() {
  return (
    <div className={style.LoginStart}>
      <span className={style.title}>로그인</span>
      <form action="" className={style.LOGIN_FORM}>
        <input type="text" placeholder="아이디" className={style.id} />
        <input type="text" placeholder="비밀번호" className={style.password} />
      </form>
      <div className={style.login_options}>
        <div className={style.left}>
          <input type="checkbox" className={style.checkbox} />
          <label htmlFor="">아이디 저장</label>
        </div>
        <div className={style.right}>
          <p>아이디 - 비밀번호 찾기</p>
          <p>회원가입</p>
        </div>
      </div>
      <button>로그인</button>
    </div>
  );
}

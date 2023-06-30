import React from "react";
import style from "./PasswordNew.module.css";

export default function PasswordNew() {
  return (
    <div className={style.PasswordNew}>
      <span className={style.title}>새로운 비밀번호를 입력해주세요</span>
      <form action="" className={style.PASSWORD_NEW}>
        <label htmlFor="">새 비밀번호</label>
        <p>영문+숫자 10자 이상 또는 영문+숫자+특수기호 8자 이상</p>
        <input
          type="text"
          placeholder="새 비밀번호 입력"
          className={style.newpassword}
        />
        <label htmlFor="">새 비밀번호 확인</label>
        <input type="text" placeholder="새 비밀번호 재입력" />
      </form>
      <button>로그인</button>
    </div>
  );
}

import React from "react";
import style from "./PasswordSearchPhone.module.css";

export default function PasswordSearchPhone() {
  return (
    <div className={style.PasswordSearchPhone}>
      <span className={style.title}>아이디 - 비밀번호 찾기</span>
      <ul className={style.search_option}>
        <li>아이디 찾기</li>
        <li>비밀번호 찾기</li>
      </ul>
      <form action="" className={style.PASSWORD_SEARCH}>
        <label htmlFor="">아이디</label>
        <input type="text" placeholder="jungsh4064" className={style.id} />
        <label htmlFor="">휴대폰 번호</label>
        <input type="text" placeholder="01097788973" className={style.phone} />
        <label htmlFor="">인증번호</label>
        <input
          type="text"
          placeholder="인증번호 입력"
          className={style.certification}
        />
      </form>
      <p>
        인증번호 전송은 통신사에 따라 최대 1분까지 소요할 수 있습니다.
        인증번호가 도착하지 않으면 <strong>인증번호 재전송</strong>을
        눌러주세요.
      </p>
      <button>비밀번호 찾기</button>
    </div>
  );
}

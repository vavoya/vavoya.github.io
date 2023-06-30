import React from "react";
import style from "./IDSearchPhone.module.css";

export default function IDSearchPhone() {
  return (
    <div className={style.IDSearchPhone}>
      <span className={style.title}>아이디 - 비밀번호 찾기</span>
      <ul className={style.search_option}>
        <li>아이디 찾기</li>
        <li>비밀번호 찾기</li>
      </ul>
      <form action="" className={style.ID_SEARCH}>
        <label htmlFor="">이름</label>
        <input type="text" placeholder="정한준" className={style.name} />
        <label htmlFor="">휴대폰 번호</label>
        <input type="text" placeholder="01097788973" className={style.phone} />
        <label htmlFor="">인증번호</label>
        <input
          type="text"
          placeholder="인증번호 입력"
          className={style.certification}
        />
      </form>
      <p className={style.phoneretry}>
        인증번호 전송은 통신사에 따라 최대 1분까지 소요할 수 있습니다.
        인증번호가 도착하지 않으면 <strong>인증번호 재전송</strong>을
        눌러주세요.
      </p>
      <button>아이디 찾기</button>
    </div>
  );
}

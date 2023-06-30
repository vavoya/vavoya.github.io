import React from "react";
import style from "./IDSearch.module.css";

export default function IDSearch() {
  return (
    <div className={style.IDSearch}>
      <span className={style.title}>아이디 - 비밀번호 찾기</span>
      <ul className={style.search_option}>
        <li>아이디 찾기</li>
        <li>비밀번호 찾기</li>
      </ul>
      <form action="" className={style.ID_SEARCH}>
        <label htmlFor="">이름</label>
        <input type="text" placeholder="이름 입력" className={style.name} />
        <label htmlFor="">휴대폰 번호</label>
        <input
          type="text"
          placeholder="- 없이 휴대폰 번호 입력"
          className={style.phone}
        />
      </form>
      <button>인증번호 받기</button>
    </div>
  );
}

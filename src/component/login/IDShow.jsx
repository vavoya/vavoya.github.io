import React from "react";
import style from "./IDShow.module.css";

export default function IDShow() {
  return (
    <div className={style.IDShow}>
      <span className={style.title}>아이디 - 비밀번호 찾기</span>
      <div className={style.result}>
        <span className={style.result_title}>
          가입한 아이디는 아래와 같습니다
        </span>
        <p className={style.result_desc}>
          인증한 휴대폰 번호로 가입한 아이디입니다. 아이디 확인 후 로그인을
          진행해 주세요.
        </p>
        <span className={style.result_id}>jungsh4064</span>
        <p className={style.result_date}>2023. 06. 07. 가입</p>
      </div>
      <button>로그인하러 가기</button>
      <p className={style.passwordlost}>비밀번호를 잊으셨나요?</p>
    </div>
  );
}

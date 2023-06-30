import React from "react";
import style from "./MembershipInformation.module.css";

export default function MembershipInformation() {
  return (
    <div className={style.MembershipInformation}>
      <span className={style.title}>
        회원 정보를 입력 후, 가입을 완료해주세요.
      </span>

      <div className={style.wrap}>
        <div className={style.left}>
          <p>기본정보</p>
          <div className={style.profile}>
            <ul className={style.profile_left}>
              <li>이름</li>
              <li>생년월일</li>
              <li>휴대폰번호</li>
            </ul>
            <ul className={style.profile_right}>
              <li>정한준</li>
              <li>1998.05.04</li>
              <li>010-9778-8973</li>
            </ul>
          </div>
        </div>

        <div className={style.right}>
          <form action="" className={style.ID}>
            <label htmlFor="">아이디</label>
            <input type="text" placeholder="영문 혹은 영문+숫자, 4~20자" />
          </form>

          <form action="" className={style.PASSWORD}>
            <label htmlFor="">비밀번호</label>
            <label htmlFor="">
              영문+숫자 10자 이상 또는 영문+숫자+특수기호 8자 이상
            </label>
            <input type="password" placeholder="비밀번호 입력" />
            <input type="password" placeholder="비밀번호 재입력" />
          </form>

          <form action="" className={style.EMAIL}>
            <label htmlFor="">이메일</label>
            <div className={style.email_input}>
              <input type="text" placeholder="이메일 앞자리" />
              <label>@</label>
              <input type="text" />
            </div>
            <ul className={style.email_link}>
              <li>직접입력</li>
            </ul>
          </form>
        </div>
      </div>

      <button>다음</button>
    </div>
  );
}

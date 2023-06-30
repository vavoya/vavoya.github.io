import React from "react";
import style from "./MembershipEnd.module.css";

export default function MembershipEnd() {
  return (
    <div className={style.MembershipEnd}>
      <span className={style.title}>재떨이 사장님 가입을 축하드립니다!</span>
      <p className={style.title_desc}>
        재떨이 사장님 계정이 생성되었습니다.
        <br />
        회원정보를 확인 후 서비스 이용을 위한 약관 동의를 계속 진행해주세요.
      </p>

      <div className={style.wrap}>
        <div className={style.left}>
          <span>기본 회원 정보</span>
          <div className={style.profile}>
            <ul className={style.profile_left}>
              <li>아이디</li>
              <li>이름</li>
              <li>생년월일</li>
              <li>휴대폰번호</li>
              <li>이메일</li>
            </ul>
            <ul className={style.profile_right}>
              <li>jungsh04064</li>
              <li>정한준</li>
              <li>1998. 05. 04</li>
              <li>010-9778-8973</li>
              <li>jungsh04064@naver.com</li>
            </ul>
          </div>
        </div>

        <div className={style.right}>
          <span>광고성 정보 수신 등의 처리 결과</span>
          <div className={style.result}>
            <ul className={style.result_left}>
              <li>처리 날짜</li>
              <li>SMS</li>
              <li>이메일</li>
              <li>전화</li>
            </ul>
            <ul className={style.result_right}>
              <li>2023.06.07</li>
              <li>수신 동의</li>
              <li>수신 동의</li>
              <li>수신 거부</li>
            </ul>
          </div>

          <p>재떨이 광고성 정보 수신 설정이 완료되었습니다.</p>
        </div>
      </div>

      <p className={style.correction}>
        위 내용은 재떨이 정보 수정 에서 수정할 수 있습니다.
      </p>
      <button>재떨이 서비스 시작하기!</button>
    </div>
  );
}

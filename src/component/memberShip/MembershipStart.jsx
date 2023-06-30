import React from "react";
import style from "./MembershipStart.module.css";
import { ReactComponent as CheckOff } from "../images/check_off.svg";
import { ReactComponent as CheckOn } from "../images/check_on.svg";
import { ReactComponent as Arrow } from "../images/arrow.svg";

export default function MembershipStart() {
  return (
    <div className={style.start_contents}>
      <span className={style.start_title}>
        재떨이사장님 회원가입을 시작합니다.
      </span>
      <p className={style.start_desc}>
        재떨이사장님 회원이 되면 재떨이에서 제공하는 모든 사장님서비스를 편하게
        이용하실 수 있어요.
      </p>

      <div className={style.full_agreement}>
        <p>전체 동의</p>
      </div>

      <div className={style.agree_first}>
        <span>서비스 이용을 위해 동의가 필요합니다.</span>
        <ul>
          <li>
            <CheckOn></CheckOn>
            <p>[필수] 이용약관 동의</p>
            <Arrow></Arrow>
          </li>
          <li>
            <CheckOn></CheckOn>
            <p>[필수] 개인정보 수집이용 동의</p>
            <Arrow></Arrow>
          </li>
        </ul>
      </div>

      <div className={style.agree_second}>
        <span>특별한 혜택과 최신 소식을 받아보세요!</span>
        <ul className={style.top}>
          <li>
            <CheckOff></CheckOff>
            <p>[선택] 서비스/이벤트 정보 제공을 위한 개인정보 수집 이용 동의</p>
          </li>
          <li>
            <CheckOff></CheckOff>
            <p>[선택] 광고성 정보 수신동의</p>
            <Arrow></Arrow>
          </li>
        </ul>
        <ul className={style.option}>
          <li>
            <CheckOff></CheckOff>
            <p>SMS</p>
          </li>
          <li>
            <CheckOff></CheckOff>
            <p>이메일</p>
          </li>
          <li>
            <CheckOff></CheckOff>
            <p>전화</p>
          </li>
        </ul>
        <p className={style.information}>
          재떨이 회사가 제공하는 서비스의 광고성 정보를 수신합니다.
        </p>
      </div>

      <a className={style.phone_agree} href="">
        <p>휴대폰으로 인증하기</p>
      </a>
    </div>
  );
}

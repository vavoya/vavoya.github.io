import React from "react";
import style from "./Footer.module.css";
import { ReactComponent as ArrowDown } from "../../assets/images/arrow_down.svg";

export default function Footer() {
  return (
    <footer>
      <ul className={style.top}>
        <li>이용약관</li>
        <li>개인정보처리방침</li>
        <li>
          <p>자세히</p>
          <ArrowDown></ArrowDown>
        </li>
      </ul>
      <ul className={style.bottom}>
        <li>대표번호 010-9778-8973</li>
        <li>ⓒJaetteoli Corp.</li>
      </ul>
    </footer>
  );
}

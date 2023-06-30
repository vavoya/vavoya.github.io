import React from "react";
import Header from "../Layout/header/Header"
import SideBar from "../Layout/sidebar/SideBar";
import Items from "../Layout/registerItems/Items";
import Button from "../UI/Button";
import classes from './Main1.module.css'

const Main1 = (props) => {
    return (
        <div>
            <Header />
            <SideBar />
            <Items title='메인메뉴 등록' subTitle='오늘 메인메뉴중 떨이 상품으로 등록할 음식들을 할인율과 수량을 입력해주세요' />
            <Items title='사이드 메뉴 등록' subTitle='오늘 사이드메뉴중 떨이 상품으로 등록할 음식들을 할인율과 수량을 입력해주세요' />
            <Button />
        </div>
    )
}

export default Main1;
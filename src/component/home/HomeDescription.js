import style from './HomeDescription.module.css'

const HomeDescription = () => {
    return (
        <div className={style.homeDescription}>
            <h1>
                일상의 고민을 여기에,<br />
                재떨이
            </h1>
            <h2>
                매일 매일 발생하는 떨이 음식에 대한 고민은 끝.<br />
                판매자는 떨이 처리 소비자는 싼 가격 구매 모두의 고민을 해결하는 서비스 떨이 음식을 다시 사용한다 재떨이입니다.
            </h2>
        </div>
    )
}

export default HomeDescription;
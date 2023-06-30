import classes from './OrderItem.module.css'

const OrderItem = (props) => {
    return (
        <div className={classes['outer-container']}>
            <div className={classes['inner-container']}>
                <h1 className={classes.time}>
                    18:22
                    {props.isStatus !== 'waiting' &&
                        <div className={classes['order-number-container']}>
                            <p className={classes['order-number']}>주문번호</p>
                            <h1>1</h1>
                        </div>}
                </h1>
                <div className={classes['menu-container']}>
                    <div>
                        <div className={classes['top-menu']}>
                            <p className={`${classes['menu']} ${classes['p-margin']} ${classes['count']}`}>[메뉴 2개] 21,000원</p>
                            <div className={`${classes['ispayment-button']} ${classes['p-margin']} ${classes['count']}`}>
                                결제완료
                            </div>
                            {props.isStatus !== 'complete' &&
                                <div className={classes['ispayment-button']}>
                                    요청있음
                                </div>
                            }
                        </div>
                        <p className={`${classes['menu']} ${classes['p-margin']} ${classes['menu-detail']}`}>연어 샐러드 1개 / 고기 샐러드 1개</p>
                        <p className={`${classes['menu']} ${classes['p-margin']}`}>18 : 40 픽업 예정</p>
                    </div>
                    <div>
                        <p className={`${classes['p-margin']} ${classes['order-request']}`}>
                            연어 샐러드에서 연어 빼주시고 맛있는거 주세요!!!
                        </p>
                    </div>
                </div>
                {props.isStatus === 'waiting' &&
                    <div className={classes['button-div']}>
                        <button className={classes['order-print']}>
                            주문표<br />인쇄
                        </button>
                        <button className={classes['order-cancel']}>
                            주문<br />취소하기
                        </button>
                        <button className={classes['do-order']}>
                            접수<br />하기
                        </button>
                    </div>}
                {props.isStatus === 'process' &&
                    <div className={`classes['button-div']`}>
                        <button className={`${classes.btn} ${classes['order-print']}`}>
                            주문표<br />인쇄
                        </button>
                        <button className={`${classes.btn} ${classes['order-cancel']}`}>
                            주문<br />취소하기
                        </button>
                        <button className={`${classes.btn} ${classes['do-order']}`} >
                            영수증<br />인쇄
                        </button>
                    </div>}
                {props.isStatus === 'complete' &&
                    <div className={classes['button-div']}>
                        <button className={`${classes.btn} ${classes['do-order']}`} >
                            영수증<br />인쇄
                        </button>
                    </div>}
            </div>
        </div >
    )
}

export default OrderItem;
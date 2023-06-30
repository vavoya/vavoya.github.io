import OrderButton from "../../UI/OrderButton";
import classes from './OrderStatus.module.css'

const OrderStatus = (props) => {
    return (
        <div className={classes['order-container']}>
            <OrderButton classes='order' content='접수대기' />
            <OrderButton classes='order' content='처리중' />
            <OrderButton classes='order' content='완료' />
            <OrderButton classes='order' content='떨이 등록 / 수정' />
            <OrderButton classes='finish' content='영업 종료' />
        </div>
    )
}

export default OrderStatus;
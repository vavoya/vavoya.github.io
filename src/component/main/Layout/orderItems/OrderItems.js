import OrderStatus from '../orderStatus/OrderStatus';
import OrderItem from './OrderItem';
import classes from './OrderItems.module.css'

const OrderItems = (props) => {
    return (
        <div className={classes['outer-container']}>
            <OrderStatus />
            <div className={classes['inner-container']}>
                <OrderItem isStatus={props.isStatus} />
                <OrderItem isStatus={props.isStatus} />
                <OrderItem isStatus={props.isStatus} />
                <OrderItem isStatus={props.isStatus} />
                <OrderItem isStatus={props.isStatus} />
                <OrderItem isStatus={props.isStatus} />
            </div>
        </div>

    )
}

export default OrderItems;
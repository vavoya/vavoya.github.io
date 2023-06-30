import classes from './OrderButton.module.css'

const OrderButton = (props) => {
    return (
        <button className={`${classes['order-button']} ${classes[props.classes]}`}>
            {props.content}
        </button>
    )
}

export default OrderButton
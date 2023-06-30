import classes from './Input.module.css'

const Input = (props) => {
    return (
        <input type="text" placeholder={props.placeholder} />
    )
}

export default Input;
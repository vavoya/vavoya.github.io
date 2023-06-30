import style from './Login.module.css'

const Login = () => {
    return(
        <div className={style.btnContainer}>
            <button className={style.login}>Log in</button>
            <button className={style.signup}>회원가입</button>
        </div>
    )
}

export default Login
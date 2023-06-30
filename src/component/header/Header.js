import Nav from './Nav';
import style from './Header.module.css'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return(
        <header>
            <div className={style.logo}>
                <img className={style.logoImg} src={logo}></img>
            </div>
            <Nav />
        </header>
    )
}

export default Header;
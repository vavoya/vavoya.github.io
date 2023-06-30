import Download from './Download';
import style from './Home.module.css'
import HomeDescription from './HomeDescription';
import Login from './Login';
import home_bg1 from '../../image/home_bg1.png'
import home_bg2 from '../../image/home_bg2.png'
import home_bg3 from '../../image/home_bg3.png'
import home_bg4 from '../../image/home_bg4.png'
import home_bg5 from '../../image/home_bg5.png'
import { useEffect, useState } from 'react';

const Home = () => {
    const images = [home_bg1, home_bg2, home_bg3, home_bg4, home_bg5]; // 여러 개의 이미지 경로
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className={style.home} style={{ backgroundImage: `url(${images[currentImage]})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repea', transition: 'background-image 0.5s ease'}}>
            <div className={style.main}>
                <HomeDescription></HomeDescription>
                <Login></Login>
            </div>
            <Download></Download>
        </div>
    )
}

export default Home;

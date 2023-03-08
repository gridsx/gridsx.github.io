import { Button } from 'antd';
import { FC } from 'react'

import './style.css'

import mainPic from '../../assets/main.png'

export const HomePage: FC = () => {

    return <div className='home-area' >
        <div className='home-slogan'>
            <img src={mainPic} alt="mainPic" width={'100%'} height={'70%'} />
        </div>
        <div className='home-intro'>
            <div style={{ fontSize: 64, color: 'white', textAlign: 'left' }}>Tables+</div>
            <div style={{ color: "white", fontSize: 18 }}>A MySQL GUI Client for everybody to use!</div>
            <hr />
            <ul>
                <li> This is probably the most mordern software. </li>
                <li> Safe, fast, elegant and More.</li>
                <li> Completely free!</li>
                <li> Open to contributions!</li>
                <li> For Business use contact us, we will make your offer worth it!</li>
            </ul>
            <a style={{ backgroundColor: 'deepskyblue', color: 'white', textDecoration: 'none', width: 120, height: 40, fontSize: 16, paddingTop: 6, textAlign: 'center' }}
                href='https://gitee.com/winjeg/tables_plus/releases/download/v1.0.0/tables%20.exe'>Try it now!</a>
        </div>
    </div>
};

export default HomePage;
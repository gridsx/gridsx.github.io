import { Button } from 'antd';
import { FC } from 'react'

import './style.less'

export const HomePage: FC = () => {

    return <div className='home-area' >
        <div className='home-slogan'>
            Gridsx Make Development Happier!
        </div>
        <div className='home-intro'>
            <ul>
                <li> This is probably the most mordern software. </li>
                <li> Safe, fast, elegant and More.</li>
                <li>Free Trial for 30 DAYS!</li>
                <li> $9.99 for personal use</li>
                <li>For Business use contact us, we will make your offer worth it!</li>
            </ul>
            <Button size='large'>Try it now!</Button>
        </div>
    </div>
};

export default HomePage;
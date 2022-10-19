import { FC } from 'react'

import './style.less'

const UserArea: FC = () => {
    return <div className='user-area'>
            <div className='user-area-avatar'>S</div>
            <div style={{marginTop: 15}}>someone@gmail.com</div>
    </div>
}

export default UserArea;
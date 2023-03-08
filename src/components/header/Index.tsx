import { Menu } from 'antd';
import React, { useState, FC } from 'react';
import type { MenuProps } from 'antd';
import { AppstoreOutlined, HomeOutlined, DownloadOutlined, InfoCircleOutlined } from '@ant-design/icons';

import logo from '../../assets/logo.svg'


import './style.css'
import UserArea from './UserArea';

const items: MenuProps['items'] = [
    {
        label: 'Home',
        key: 'mail',
        icon: <HomeOutlined />,
    },
    {
        label: 'Products',
        key: 'app',
        icon: <AppstoreOutlined />,
        children: [
            {
                label: 'Light version(v1.0)',
                key: 'product:1',
                disabled: true
            }
        ],
    },
    {
        label: 'Downloads',
        key: 'SubMenu',
        icon: <DownloadOutlined />,
        children: [
            {
                label: (
                    <div>
                        <DownloadOutlined style={{ marginRight: 10 }} />
                        <a href="https://gitee.com/winjeg/tables_plus/releases/download/v1.0.0/tables%20.exe" target="_blank" rel="noopener noreferrer">For Windows</a>
                    </div>
                ),
                key: 'download:1',
            },
            {
                label: (
                    <div>
                        <DownloadOutlined style={{ marginRight: 10 }} /> For Linux
                    </div>
                ),
                key: 'download:2',
                disabled: true,
            },
            {
                label: (
                    <div>
                        <DownloadOutlined style={{ marginRight: 10 }} /> For Mac OS
                    </div>
                ),
                key: 'download:2',
                disabled: true,
            },
        ],
    },
    {
        label: (
            <div>
                <InfoCircleOutlined style={{ marginRight: 10 }} />
                <a href="https://winjeg.github.io" target="_blank" rel="noopener noreferrer">
                    About Us
                </a>
            </div>
        ),
        key: 'alipay',
    },
];


const Header: FC = () => {
    const [current, setCurrent] = useState('mail');


    const mainMenu = () => {
        return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ width: '70%', height: 50, marginTop: 10 }} />;
    }

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };


    return <div className='header-bar'>
        <LogoArea />
        {mainMenu()}
        <UserArea />
    </div>

};

const LogoArea: FC = () => {
    return <div className='logo-area'>
        <img src={logo} style={{ width: '45px', color: 'red', fill: 'red', marginBottom: 8 }} alt="" />
        <div style={{ display: 'inline-block', fontStyle: 'italic', marginLeft: 10 }}>GridsX</div>
    </div>
}

export default Header;
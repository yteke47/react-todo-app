import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import './style.css'
import 'react-tabs/style/react-tabs.css';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthComponent = () => {
    return (
        <div className='authContainer'>
            <Tabs>
                <TabList>
                    <Tab>Giriş</Tab>
                    <Tab>Kayıt</Tab>
                </TabList>

                <TabPanel>
                    <LoginForm></LoginForm>
                </TabPanel>
                <TabPanel>
                    <RegisterForm></RegisterForm>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default AuthComponent;
import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import './LoginComponent.css'
import 'react-tabs/style/react-tabs.css';

import LoginForm from './loginForm/LoginForm';
import RegisterForm from './registerForm/RegisterForm';

const LoginComponent = () => {
    return (
        <div className='loginContainer'>
            <Tabs>
                <TabList>
                    <Tab>Giriş</Tab>
                    <Tab>Kayıt</Tab>
                </TabList>

                <TabPanel>
                    <LoginForm ></LoginForm>
                </TabPanel>
                <TabPanel>
                    <RegisterForm></RegisterForm>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default LoginComponent;
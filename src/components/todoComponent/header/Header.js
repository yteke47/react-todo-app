import React, { useState, useRef, useEffect } from 'react'
import { MdAccountCircle } from 'react-icons/md'

import './style.css'
import { useAuth } from '../../../context/AuthContext';

function Header() {
    const [accountMenu, setAccountMenu] = useState(false);
    const accountRef = useRef(null);
    const { logOut } = useAuth();

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (accountRef.current && !accountRef.current.contains(event.target)) {
            setAccountMenu(false);
        }
    };

    return (
        <div className='header' >
            <div className='title'><h1>Todo App</h1></div>
            <div ref={accountRef} className={`account ${accountMenu ? 'open' : ''}`}>
                <div className='account-icon'>
                    <MdAccountCircle onClick={() => setAccountMenu(state => !state)} size={"40px"}></MdAccountCircle>
                </div>
                <ul className='account-menu'>
                    <li onClick={() => logOut()} className='account-item'>Log out</li>
                </ul>
            </div>
        </div>
    );
}

export default Header
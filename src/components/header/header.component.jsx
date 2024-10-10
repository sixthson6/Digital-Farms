import React from "react";
import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from './images/Logo_DigiGlobal.svg';
import Logo from './images/Logo_DigiGlobal.png';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss'

const Header = ({ currentUser }) => (
    <div className="header">
        <Link to='/' className="logo-container">
            {/* <Logo className="logo" /> */}
            <img className='logo' src={Logo} alt="Logo" />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/shop'>
                ABOUT US
            </Link>
            { currentUser ? ( 
                <div className="option" onClick={() => auth.signOut()}>
                    SIGNOUT
                </div>
            ) : (
                <Link className="option" to='/signin'>
                    SIGNIN
                </Link>
            )}
        </div>
    </div>
);

export default  Header;
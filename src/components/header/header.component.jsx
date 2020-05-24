import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {currentUser ?
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <div>

                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                </div>
            }

            <Link className='option' to='/shop'>
                CART
    </Link>
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser //state.user from rootreducer .currentUser from userreducer. 
    //This will be the props to <Header> from above, without sending it from the parent component(App)
})

export default connect(mapStateToProps)(Header);
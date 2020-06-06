import React, { useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/home-page.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
  
  //simulate componentDidMount. Will be fired only the first time.
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        {/* if we are already signed in, do not allow to access sign in again */}
        <Route path='/signin' render={() => currentUser ? (<Redirect to='/'></Redirect>) : (<SignInAndSignUpPage></SignInAndSignUpPage>)}></Route>
        <Route exact path='/checkout' component={CheckoutPage}></Route>

      </Switch>
    </div >
  );

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

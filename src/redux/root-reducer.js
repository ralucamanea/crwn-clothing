import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import {persistReducer} from 'redux-persist';

//the localStorage of our window broser. Also can import sessionStorage
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    //the reducers that we want to store
    whiteList: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
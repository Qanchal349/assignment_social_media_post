import {configureStore} from '@reduxjs/toolkit' 
import { userAuthReducer } from './reducers/user';
import { commentReducer, postReducer } from './reducers/post';

const store = configureStore({
    reducer:{
        user:userAuthReducer,
        posts:postReducer,
        comment:commentReducer
    }
})


export default store; 
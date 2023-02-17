import { configureStore } from '@reduxjs/toolkit'
import {rootReducer} from './Component/Redux/LoginRedux/index'
const thunkMiddleware = require('redux-thunk').default
const store = configureStore({reducer: rootReducer,
    
    middleware: [thunkMiddleware]
  })
// store.subscribe()
// store.dispatch(fetchProducts())
export default store;
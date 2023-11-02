import {configureStore} from '@reduxjs/toolkit'

import authReducer from '@src/auth/auth.slice'
import loginReducer from '@src/screens/login/login.slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    login: loginReducer,
  },
})

export {store}

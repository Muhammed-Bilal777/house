

import {configureStore} from "@reduxjs/toolkit"
import { userApi } from "./api/userApi"
import userSlice from "./features/userSlice"

export const store = configureStore({

   reducer :{
     auth : userSlice,
    [userApi.reducerPath] : userApi.reducer,
   },
   middleware :(getDefaultMiddleware) => getDefaultMiddleware().concat([userApi.middleware])
})
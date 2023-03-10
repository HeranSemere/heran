import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { generalApi } from 'redux/services/services.all';


const store = configureStore({
  reducer: {
    [generalApi.reducerPath]: generalApi.reducer,
  },


  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      generalApi.middleware
    ]),
})


setupListeners(store.dispatch)

export default store;




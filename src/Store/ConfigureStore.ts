import { createStore, combineReducers } from 'redux'
import appReducer from './Reducers/AppReducer'
import userListsReducer from './Reducers/UserListsReducer'

const rootReducer = combineReducers({
  app: appReducer,
  lists: userListsReducer
})

const configureStore = () => createStore(rootReducer)

export const store = configureStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

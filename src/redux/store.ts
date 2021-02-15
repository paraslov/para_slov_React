import { combineReducers, createStore } from 'redux'
import homePage_reducer from './reducers/homePage_reducer'

let rootReducer = combineReducers({
	homePage: homePage_reducer,
})

const store = createStore(rootReducer)

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>


export default store
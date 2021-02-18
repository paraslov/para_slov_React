import { combineReducers, createStore } from 'redux'
import blogPageReducer from './reducers/blogPage_reducer'
import homePageReducer from './reducers/homePage_reducer'

let rootReducer = combineReducers({
	homePage: homePageReducer,
	blogPage: blogPageReducer,
})

const store = createStore(rootReducer)

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>


export default store
import { combineReducers, createStore } from 'redux'
import blogPageReducer from './reducers/blogPage_reducer'
import homePageReducer from './reducers/homePage_reducer'
import referencesPageReducer from './reducers/referencesPage_reducer'

let rootReducer = combineReducers({
	homePage: homePageReducer,
	blogPage: blogPageReducer,
	refPage: referencesPageReducer,
})

const store = createStore(rootReducer)

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>


export default store
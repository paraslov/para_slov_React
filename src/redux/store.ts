import { combineReducers, createStore } from 'redux'
import blogPageReducer from './reducers/blogPage_reducer'
import homePageReducer from './reducers/homePage_reducer'
import navMenuReducer from './reducers/navMenu_reducer'
import referencesPageReducer from './reducers/referencesPage_reducer'
import statsPageReducer from './reducers/statsPage_reducer'

let rootReducer = combineReducers({
	homePage: homePageReducer,
	blogPage: blogPageReducer,
	refPage: referencesPageReducer,
	statsPage: statsPageReducer,
	navMenu: navMenuReducer,
})

const store = createStore(rootReducer)

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never


export default store
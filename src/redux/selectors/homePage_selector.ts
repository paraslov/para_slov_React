import {AppStateType} from '../store'

export const getHomePageText = (state: AppStateType) => {
	return state.homePage.homePageText
}
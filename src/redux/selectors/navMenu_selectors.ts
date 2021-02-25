import { AppStateType } from '../store'


export const getCurrentPageName = (state: AppStateType) => {
	return state.navMenu.currentPageName
}
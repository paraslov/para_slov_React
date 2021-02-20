import { AppStateType } from '../store'


export const getRefPageDescText = (state: AppStateType) => {
	return state.refPage.refPageDescText
}

export const getRefPageUpdateDate = (state: AppStateType) => {
	return state.refPage.refPageUpdateDate
}
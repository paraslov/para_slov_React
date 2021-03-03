import { AppStateType } from '../store'


export const getStatsPage = (state: AppStateType) => {
	return state.statsPage
}
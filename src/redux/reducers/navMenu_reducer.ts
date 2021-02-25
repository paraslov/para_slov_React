import { InferActionsTypes } from "../store"



const navMenuInitialState = {
	currentPageName: 'Главная' as CurrentPageNameType,
}

type NavMenuInitialStateType = typeof navMenuInitialState

const navMenuReducer = (state = navMenuInitialState, action: NavMenuActionsType): 
	NavMenuInitialStateType => {
		switch(action.type){
			case 'ps/nm/SET_CURRENT_PAGE': 
				return {
					...state,
					currentPageName: action.currentPageName,
				}
			default: return state
		}
}

type NavMenuActionsType = InferActionsTypes<typeof navMenuActions>

export type CurrentPageNameType = 'Главная'	| 'Блог' | 'Материалы' | 'Статистика' | 
		'Наши друзья' | 'Мои навыки'


export const navMenuActions = {
	setCurrentPageName: (currentPageName: CurrentPageNameType)=>
		({type: 'ps/nm/SET_CURRENT_PAGE', currentPageName} as const),
}


export default navMenuReducer
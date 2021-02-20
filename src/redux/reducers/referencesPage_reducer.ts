import { referencesPageInitialState, ReferencesPageInitialStateType } from "../initialState/referencesPageState";


const referencesPageReducer = (state = referencesPageInitialState, action: any): 
	ReferencesPageInitialStateType => {
	switch(action.type) {
		default: return state
	}
}

export default referencesPageReducer
import { blogPageInitialState } from "../initialState/blogPageState"




type BlogPageInitialStateType = typeof blogPageInitialState

const blogPageReducer = (state = blogPageInitialState, action: any): BlogPageInitialStateType => {
	switch(action.type) {
		default: return state
	}
}


export default blogPageReducer
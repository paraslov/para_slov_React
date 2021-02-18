import { AppStateType } from "../store"


export const getBlogPosts = (state: AppStateType) => {
	return state.blogPage.blogPosts
}
import { AppStateType } from '../store'


export const getRefPageDescText = (state: AppStateType) => {
	return state.refPage.refPageDescText
}

export const getRefPageUpdateDate = (state: AppStateType) => {
	return state.refPage.refPageUpdateDate
}
export const getRefPageItKamasutraRef = (state: AppStateType) => {
	return state.refPage.refPageItKamasutraRef
}
export const getHtmlCssRefs = (state: AppStateType) => {
	return state.refPage.htmlCssRefs
}
export const getJavaScriptRefs = (state: AppStateType) => {
	return state.refPage.javaScriptRefs
}
export const getReactRefs = (state: AppStateType) => {
	return state.refPage.reactRefs
}
export const getCommonRefs = (state: AppStateType) => {
	return state.refPage.commonRefs
}
export const getJobSearchRefs = (state: AppStateType) => {
	return state.refPage.jobSearchRefs
}





		// refPageItKamasutraRef: state.refPage.refPageItKamasutraRef,
		// htmlCssRefs: state.refPage.htmlCssRefs,
		// javaScriptRefs: state.refPage.javaScriptRefs,
		// reactRefs: state.refPage.reactRefs,
		// commonRefs: state.refPage.commonRefs,
		// jobSearchRefs: state.refPage.jobSearchRefs,
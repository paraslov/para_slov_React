

//* in this StatsPage_reducer initialState I have stored all my learning stats 
//* time I used for different frontend disciplines:
const statsPageInitialState = {
	updateDate: '03.03.2021 г',
	common: 79,
	htmlCss: 132,
	JS: 174,
	reactJS: 209.5,
	TS: 83,
	youTube: 108,
	moneyInvested: 5243,
}

//* auto creating type for my initial state
export type StatsPageStateType = typeof statsPageInitialState

//* creating reducer. action is any type as there is no actions yet
const statsPageReducer = 
	(state = statsPageInitialState, action:any): StatsPageStateType=> {
	switch (action.type) {


		default: return state
	}
}


export default statsPageReducer
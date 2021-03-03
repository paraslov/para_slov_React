import { connect } from "react-redux";
import { StatsPageStateType } from "../../../redux/reducers/statsPage_reducer";
import { getStatsPage } from "../../../redux/selectors/statsPage_selectors";
import { AppStateType } from "../../../redux/store";
import StatsPage from "./StatsPage"

const mapStateToProps = (state: AppStateType) => {
	return {
		statsPage: getStatsPage(state),
	}
}

//* creating type for statsPage 
export type StatsPagePropsType = {
	statsPage: StatsPageStateType
}

const StatsPageContainer = connect<StatsPagePropsType, {}, {}, AppStateType>
	(mapStateToProps, {})(StatsPage)


export default StatsPageContainer
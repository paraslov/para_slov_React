import React from 'react'
import { connect } from 'react-redux'
import { HomePageTextType } from '../../../redux/reducers/homePage_reducer'
import { getHomePageText } from '../../../redux/selectors/homePage_selector'
import { AppStateType } from '../../../redux/store'
import styles from '../../common/Style/style.module.css'
import classes from './HomePage.module.css'
import HomePageTextBlock from './HomePageTextBlock/HomePageTextBlock'

type HomePagePropsType = {
	homePageText: Array<HomePageTextType>
}

const HomePage: React.FC<HomePagePropsType> = (props) => {

	let homePageText = props.homePageText.map(
		post => <HomePageTextBlock key={post.id} message={post.message}/>
	)
	
	return (
		<div className={styles.contentWrapper}>
			<div className = {classes.header}>
				Моё обучение программированию. Путь с нуля
			</div>
			{homePageText}
		</div>
	)
}

let mapStateToProps = (state: AppStateType) => {
	return {
		homePageText: getHomePageText(state),
	}
}

const HomePageContainer = connect<HomePagePropsType, {}, {}, AppStateType>(mapStateToProps, {})(HomePage)


export default HomePageContainer
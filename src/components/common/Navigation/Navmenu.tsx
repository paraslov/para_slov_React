import { useState } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { CurrentPageNameType, navMenuActions } from "../../../redux/reducers/navMenu_reducer"
import { getCurrentPageName } from "../../../redux/selectors/navMenu_selectors"
import { AppStateType } from "../../../redux/store"
import classes from "./Navmenu.module.css"


type PropsType = MapStatePropsType & MapDispatchPropsType

const NavMenu: React.FC<PropsType> = (props) => {

	let [burgerMenuActive, toggleMenuIcon] = useState<boolean>(false)

	return (
		<div className={`${classes.navmenuWrapper} ${burgerMenuActive ? classes.open : ''}`}>	
			<div className={`${classes.burgerMenu} ${burgerMenuActive ? classes.burgerMenuActive : ''}`}
				onClick={() => toggleMenuIcon(!burgerMenuActive)}>
				<span></span>
			</div>		
			<div className={`${classes.navMenu} ${burgerMenuActive ? classes.open : ''}`}>
				{/* <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink> */}
				<div className={classes.navItem}>
					<NavLink onClick={() => {
						props.setCurrentPageName('Главная')
						toggleMenuIcon(false)
					}} 
						to='/home'>Главная</NavLink>				
				</div>
				<div className={classes.navItem}>
					<NavLink onClick={() => {
						props.setCurrentPageName('Блог')
						toggleMenuIcon(false)
					}} 
						to='/blog'>Блог</NavLink> 				
				</div>
				<div className={classes.navItem}>
					<NavLink onClick={() => {
						props.setCurrentPageName('Материалы')
						toggleMenuIcon(false)
					}} 
						to='/references'>Материалы</NavLink>					
				</div>
				<div className={classes.navItem}>
					<NavLink onClick={() => {
						props.setCurrentPageName('Статистика')
						toggleMenuIcon(false)
					}} 
						to='/stats'>Статистика</NavLink>					
				</div>
				<div className={classes.navItem}>
					<NavLink onClick={() => {
						props.setCurrentPageName('Наши друзья')
						toggleMenuIcon(false)
					}} 
						to='/friends'>Наши друзья</NavLink>					
				</div>				
				{/* <div className={classes.navItem}>
					<NavLink onClick={() => props.setCurrentPageName('Мои навыки')} 
						to='/aboutme'>Мои навыки</NavLink>					
				</div>				 */}
			</div>

			<div className={classes.pageName}>{props.currentPageName}</div>
			<div className={classes.bottomBar}></div>
		</div>
	)
}

type MapStatePropsType = {
	currentPageName: CurrentPageNameType
}
type MapDispatchPropsType = {
	setCurrentPageName: (currentPageName: CurrentPageNameType)=>void
}

const mapStateToProps = (state: AppStateType) => {
	return {
		currentPageName: getCurrentPageName(state),
	}
}

const NavMenuContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
	(mapStateToProps, {setCurrentPageName: navMenuActions.setCurrentPageName})(NavMenu)

export default NavMenuContainer

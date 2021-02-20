import { NavLink } from "react-router-dom"
import classes from "./Navmenu.module.css"


const Navmenu = () => {
	return (
		<div className={classes.navmenuWrapper}>			
			<div className={classes.navMenu}>
				{/* <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink> */}
				<div className={classes.navItem}>
					<NavLink to='/home'>Главная</NavLink>				
				</div>
				<div className={classes.navItem}>
					<NavLink to='/blog'>Блог</NavLink> 				
				</div>
				<div className={classes.navItem}>
					<NavLink to='/references'>Материалы</NavLink>					
				</div>
				<div className={classes.navItem}>
					<NavLink to='/stats'>Статистика</NavLink>					
				</div>
				<div className={classes.navItem}>
					<NavLink to='/friends'>Наши друзья</NavLink>					
				</div>				
				<div className={classes.navItem}>
					<NavLink to='/aboutme'>Мои навыки</NavLink>					
				</div>				
			</div>
			<div className={classes.pageName}>Главная</div>
			<div className={classes.bottomBar}></div>
		</div>
	)
}

export default Navmenu

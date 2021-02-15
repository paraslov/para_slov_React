import classes from './Header.module.css'


const Header = () => {
	return (
		<header className={classes.appHeader}>
			<div className={classes.topBorder}></div>
			<div className={classes.headerLogo}>
				<a href="https://www.youtube.com/channel/UC-ikUsjn0OTGHjumm35HbhQ" 
					target="_blank" rel="noopener noreferrer">Пара Слов</a> 
			</div>
			<div className={classes.headerDesc}>
				Сайт о моём пути в программировании
			</div>

		</header>
	)

}

export default Header
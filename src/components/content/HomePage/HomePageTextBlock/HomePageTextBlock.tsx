import classes from '../HomePage.module.css'

type PropsType = {
	message: string
}

const HomePageTextBlock: React.FC<PropsType> = (props) => {

	return (
		<div>
			<div className={classes.homePageText} >
				{props.message}
			</div>
		</div>

	)
}

export default HomePageTextBlock
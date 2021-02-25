//import classes from '../ReferencesPage.module.css'


type PropsType = {
	message: string
}

const RefPageBlock: React.FC<PropsType> = (props) => {
	return(
		<li dangerouslySetInnerHTML={{__html: props.message}}>
			
		</li>
	)
}


export default RefPageBlock
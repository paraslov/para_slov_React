//import classes from '../ReferencesPage.module.css'

import { RefPageBlockType } from "../../../../redux/initialState/referencesPageState"


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
import { connect } from 'react-redux'
import { RefPageBlockType } from '../../../redux/initialState/referencesPageState'
import { getCommonRefs, getHtmlCssRefs, getJavaScriptRefs, getJobSearchRefs, getReactRefs, getRefPageDescText, getRefPageItKamasutraRef, getRefPageUpdateDate } from '../../../redux/selectors/refPage_selectors'
import { AppStateType } from '../../../redux/store'
import classes from './ReferencesPage.module.css'
import RefPageBlock from './RefPageBlock/RefPageBlock'


const mapRefsBlocks = (refBlock: Array<RefPageBlockType>) => {
	return refBlock.map(item => {
		return <RefPageBlock key={item.id} message={item.message} />
	})
}

const ReferencesPage: React.FC<MapStatePropsType> = (props) => {

	let htmlCssRefs = mapRefsBlocks(props.htmlCssRefs)
	let javaScriptRefs = mapRefsBlocks(props.javaScriptRefs)
	let reactRefs = mapRefsBlocks(props.reactRefs)
	let commonRefs = mapRefsBlocks(props.commonRefs)
	let jobSearchRefs = mapRefsBlocks(props.jobSearchRefs)

	return (
		<div className={classes.contentWrapper}>
			<header>
				<h2>Ссылки на материалы для обучения</h2>
				<p>{props.refPageDescText}</p>
				<p>Обновлено: {props.refPageUpdateDate}</p>
			</header>
			<section>

					<h2>Материлы по которым я учился сам и прошёл лично</h2>
					<div dangerouslySetInnerHTML={{__html: props.refPageItKamasutraRef}}></div>

				<article>
					<header>
						<h3>html&css - вёрстка:</h3>
					</header>
					<div>
						<ul>
							{htmlCssRefs}
						</ul>						
					</div>
				</article>

				<article>
					<header>
						<h3>Java Script:</h3>
					</header>
					<div>
						<ul>
							{javaScriptRefs}
						</ul>
					</div>
				</article>

				<article>
					<header>
						<h3>Библиотека ReactJS:</h3>
					</header>
					<div>
						<ul>
							{reactRefs}
						</ul>
					</div>
				</article>

				<article>
					<header>
						<h3>Общие знания и источники с разной информацией вперемешку:</h3>
					</header>
					<div>
						<ul>
							{commonRefs}
						</ul>
					</div>
				</article>
				
				<h2>Материалы по составлению резюме и собеседованиям</h2>
				<p>Здесь будут материалы, посвещённые поиску работы.</p>

				<article>
					<div>
						<ul>
							{jobSearchRefs}
						</ul>
					</div>
				</article>

			</section>
		</div>
	)
}

const mapStateToProps = (state: AppStateType) => {
	return {
		refPageDescText: getRefPageDescText(state),
		refPageUpdateDate: getRefPageUpdateDate(state),
		refPageItKamasutraRef: getRefPageItKamasutraRef(state),
		htmlCssRefs: getHtmlCssRefs(state),
		javaScriptRefs: getJavaScriptRefs(state),
		reactRefs: getReactRefs(state),
		commonRefs: getCommonRefs(state),
		jobSearchRefs: getJobSearchRefs(state),
	}
}
type MapStatePropsType = {
	refPageDescText: string
	refPageUpdateDate: string
	refPageItKamasutraRef: string
	htmlCssRefs: Array<RefPageBlockType>
	javaScriptRefs: Array<RefPageBlockType>
	reactRefs: Array<RefPageBlockType>
	commonRefs: Array<RefPageBlockType>
	jobSearchRefs: Array<RefPageBlockType>
}

const ReferencesPageContainer = connect<MapStatePropsType,{},{},AppStateType>
	(mapStateToProps, {})(ReferencesPage)

export default ReferencesPageContainer
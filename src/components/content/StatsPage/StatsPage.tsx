import styles from '../../common/Style/style.module.css'
import classes from './StatsPage.module.css'
import { StatsPagePropsType } from './StatsPageContainer'


const StatsPage: React.FC<StatsPagePropsType> = (props) => {

	const sumTimeInvested = props.statsPage.common + props.statsPage.htmlCss +
		props.statsPage.JS + props.statsPage.reactJS + props.statsPage.TS

	return (
		<div className={`${styles.contentWrapper} ${classes.statsWrapper}`}>
			<header>
				<h2>Время, использованное на обучение:</h2>
				<p>Старт обучения: 23.08.2020 г</p>
				<p>Обновлено: {props.statsPage.updateDate}</p>
			</header>
			<section>
				<p>
					<table>
						<tr>
							<td>Изучение общих знаний IT:</td>
							<td>{props.statsPage.common} ч.</td>
						</tr>
						<tr>
							<td>Изучение html&css:</td>
							<td>{props.statsPage.htmlCss} ч.</td>
						</tr>
						<tr>
							<td>Изучение JavaScript:</td>
							<td>{props.statsPage.JS} ч.</td>
						</tr>
						<tr>
							<td>Изучение React.js:</td>
							<td>{props.statsPage.reactJS} ч.</td>
						</tr>
						<tr>
							<td>Изучение TypeScript:</td>
							<td>{props.statsPage.TS} ч.</td>
						</tr>
						<tr>
							<td>Всего использовано:</td>
							<td>{sumTimeInvested} ч.</td>
						</tr>
					</table>

				</p>
				<p>А так же:</p>
				<p>
					<table>
						<tr>
							<td>Работа над блогом YouTube:</td>
							<td>{props.statsPage.youTube} ч.</td>
						</tr>
						<tr>
							<td>Денег потрачено:</td>
							<td>{props.statsPage.moneyInvested} р.</td>
						</tr>
					</table>
				</p>
			</section>
		</div>
	)
}

export default StatsPage
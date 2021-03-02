import styles from '../../common/Style/style.module.css'
import classes from './StatsPage.module.css'

const StatsPage: React.FC = () => {
	return (
		<div className={`${styles.contentWrapper} ${classes.statsWrapper}`}>
			<header>
				<h2>Время, использованное на обучение:</h2>
				<p>Старт обучения: 23.08.2020 г</p>
				<p>Обновлено: 30.01.2021 г</p>
			</header>
			<section>
				<p>
					<table>
						<tr>
							<td>Изучение общих знаний IT:</td>
							<td>71,5 ч.</td>
						</tr>
						<tr>
							<td>Изучение html&css:</td>
							<td>132 ч.</td>
						</tr>
						<tr>
							<td>Изучение JavaScript:</td>
							<td>102 ч.</td>
						</tr>
						<tr>
							<td>Изучение React.js:</td>
							<td>194,5 ч.</td>
						</tr>
						<tr>
							<td>Изучение TypeScript:</td>
							<td>8 ч.</td>
						</tr>
						<tr>
							<td>Всего использовано:</td>
							<td>508 ч.</td>
						</tr>
					</table>

				</p>
				<p>А так же:</p>
				<p>
					<table>
						<tr>
							<td>Работа над блогом YouTube:</td>
							<td>108 ч.</td>
						</tr>
						<tr>
							<td>Денег потрачено:</td>
							<td>5243 р.</td>
						</tr>
					</table>
				</p>
			</section>
		</div>
	)
}

export default StatsPage
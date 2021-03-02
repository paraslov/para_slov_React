import classes from './Friends.module.css'
import styles from '../../common/Style/style.module.css'

const FriendsPage: React.FC = () => {
	return(
		<div className={styles.contentWrapper}>
			<header className={classes.friendsPageHeader}>
				<h2>Здесь будут ссылки на аккаунты наших друзей - единомышленников</h2>
			</header>
			<div className={classes.friendItem}>
				Валерий, админ нашего телеграм - чата <strong>t.me/para_slovtg</strong>. Он тоже только начал обучение
				фронтенд разработке и с удовольствием делится в нашем чате найденными ресурсами для обучения.
				Его инстаграм:
            <a href="https://www.instagram.com/travelstory4you/" title="Перейти в инстаграм Валерия"
					target="_blank"><span> @travelstory4you</span></a>
			</div> 
		</div>
	)
}

export default FriendsPage
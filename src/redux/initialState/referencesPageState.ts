//! this is something like a DB for my refs Page as a temporary desition of DB problem
//! as I haven't learn backend even a bit yet and was focused on frontend

export type RefPageBlockType = {
	message: string
	id: number
}

export const referencesPageInitialState = {
	refPageDescText: `Тут будут хранится ссылки на все обучающие материалы, которыми пользовался я сам, 
		а так же на материалы, которыми пользовались для обучения другие ребята и щедро поделились 
		своими источниками. Спасибо им!`,
	refPageUpdateDate: '30 янвря 2021г.',
	refPageItKamasutraRef: `<p>
			Во-первых, хочу поделиться видео с <strong>канала IT-KAMASUTRA</strong> 
		<a href="https://www.youtube.com/watch?v=S7xq9x8i47k" 
			title='видео "Как стать программистом к 2021 году'
			target="_blank"><span> "Как стать программистом к 2021 году"</span>
		</a>. 
			Я взял описанный в нём план за основу своего обучения.
		</p>`,

	htmlCssRefs: [
		{message:`Изучил книгу <strong>"HeadFirst:html&css"</strong>. Стоит она не дёшево, около 2 тысяч рублей в печатном 
		варианте, но есть возможность найти pdf-файл в сети, для ознакомления...) Книга мне понравилась. 
		Где то слишком долго и подробно объясняют простые вещи, но для базы она подойдёт хорошо! К странице 
		400-500 становится уже интересно. Рекомендую.`,
		id: 1},
		{message: `<p>Так же по вёрстке прошел курс, который нам любезно предоставил участник нашей группы в телеграме <strong>t.me/para_slovtg</strong> Валерий. Курс бомба! Третий в архиве в закреплённом сообщении. Вёрстка, методология BEM, для систематизации вашего html кода и встройка скриптов javascript. Всем рекомендую пройти этот курс!</p>
			<p>Обновление(17.11.20): так же прошёл 4 и 5 курсы из архива. Оба рекомендую. Особенно полезен 5ый - подробно рассматривает тему адаптивной вёрстки.</p>`,
		id: 2},
	] as Array<RefPageBlockType>,
	javaScriptRefs: [
		{message:`<p>	Прошёл обучение по книге <strong>"JavaScript для детей, Ника Моргана"</strong>. 
			Стоит около тысячи рублей. В этом случае pdf было найти сложнее, но возможно. Основы JavaScript 
			даёт хорошо, однако, где то довольно запутанно... Продолжив своё обучение по книге 
			"HeadFirst: JavaScript", я понял, что она даёт примерно тоже самое, но объясняя всё гораздо 
			более доступно. Мне вторая книга понравилась гораздо больше, но в книге Ника Моргана есть 
			темы и знания, которые не затрагиваются в "HeadFirst: JavaScript". В общем, я не пожалел, 
			что занимался по обеим этим книгам. Но если выбирать из них одну, то мой выбор будет отдан 
			"HF: JavaScript".
			</p>`,
		id: 1},
		{message:
			`<p>	Продолжаю обучение по книге <strong>"HeadFirst: JavaScript"</strong>. Её, как и аналог для html&css, можно
            найти на просторах интернета бесплатно. JavaScript тут даётся в очень понятной форме! По
            сравнению с книгой Ника Моргана, всё гораздо более понятно и объяснено доступным языком.
            Стоит ли в таком случае изучать "JavaScript для детей"? Моё личное мнение, что стоит -
            какая то информация есть в одной книге, какая то в другой, какая то дублируется.
            Что то лучше дано в одном источнике, что то в другом. Но если вам книги категорически
            не заходят, я бы рекомендовал вам из этих двух книгу "HeadFirst: JavaScript", безусловно.
            Всё очень понятно объясняется и даются основы для дальнейшего развития.
            Поймите меня правильно, да, с практической точки зрения практика, применяемая в книге
            наврядли вам когда нибудь пригодятся. Однако, вам объяснят основы и понятия JavaScript доступным языком,
            а потом вы уже можете переходить к более сложным курсам и задачам, логику которых вам уже гораздо легче
            будет понять, имея базовые знания Javascript.
			</p>`,
		id: 2},
		{message:`<p>	По JavaScript я решил пройти и курс с канала IT-KAMASUTRA
            <a href="https://www.youtube.com/watch?v=Glux40jBsZ8&list=PLcvhF2Wqh7DPD5sRK3lw4bjBsKdgY2bPi"
                title="ссылка на курс" target="_blank"><span>"JS ну вообще с нуля"</span>
			</a>. 
				Я уже высказал своё мнение о этом курсе на YouTube-канале "Пара Слов" в 
			<a href="https://www.youtube.com/watch?v=K3IgU11mWQQ"
                title="ссылка на третий выпуск 'Дневника Программиста'" target="_blank">
                <span>третьем выпуске</span>
			</a> 
				"Дневника Программиста".
			</p>
			<p>
				Честно сказать, от курса ожидал большего. Объяснения спутанные, основы
				даются очень слабо и сбивчиво. Однако, если основы js у вас уже есть, то курс
				"js ну вообще с нуля" очень даже не плох! Он рассматривает исключительно
				практическое применение js для работы именно с сайтами без лишней информации
				и отвлечений. Так что, при условии заранее пройденных основ - рекомендую; как
				первый источник знаний о JavaScript - категорически нет.
			</p>`,
		id: 3},
		{message:`<p>	Подводя небольшой промежуточный итог по JavaScript: сейчас бы
                я изучил книгу HeadFirst: JavaScript, а после неё закрепил знания
                прохождением курса "js ну вообще с нуля", для большего понимания
                практического применения.
			</p>
            <p>
				В новом 2021 году решил укрепить знания по JavaScript по 
				<strong>курсу Александра Лущенко - "JS 2.0"</strong>. Пока что очень нравятся - 
                всё чётко, по делу и с многчисленными практическими заданиями!(За курс спасибо Валерию)
			</p>`,
		id: 4},
	] as Array<RefPageBlockType>,
	reactRefs: [
		{
			message:`На данный момент (17.11.20) начал обучение библиотеке react по курсу
            	<a href="https://www.youtube.com/watch?v=gb7gMluAeao" title="курс по react" target="_blank">
                <span>React - Путь Самурая</span>
				</a>. 
					Пока что я в восторге от новой технологии и новых знаний. Курс тоже
					пока что нравится, довольно подробное и дотошное объяснение, что
					на данном этапе очень даже кстати. Конечно же по ходу курса 
					приходится "гуглить" очень много информации дополнительно. Но куда 
					мы без старины Гугла :) <br>
					В общем, как будут подробности и первые впечатления и успехи - отпишу!
                <p>
					Закончил курс "Путь Самурая 1.0" и начал изучать TypeScript на втором курсе "Пути Самурая". 
                	Ещё хочу сделать несколько небольших проектов на React. Как только закончу, напишу источники сюда.
                </p>`,
		id: 1},
		{message:`Закончил курс "Путь Самурая 1.0" и начал 
				<strong>изучать TypeScript на втором курсе "Пути Самурая"</strong>. 
				Ещё хочу сделать несколько небольших проектов на React. Как только закончу, напишу 
				источники сюда.`,
		id: 2},
	] as Array<RefPageBlockType>,
	commonRefs: [
		{message:`<p>    Очень много видео я посмотрел с канала 
				<a href="https://www.youtube.com/channel/UCedskVwIKiZJsO8XdJdLKnA" 
				title="ссылка на канал" target="_blank">
				<span>"Фрилансер по жизни - IT и фриланс"</span>
				</a>.
				Доступные и понятные объяснения, много полезных тем освещено с практической
				точки зрения (sass, адаптивная вёрстка, gulp, VS Code и многое другое). 
				Рекомендую для начального ознакомления с технологиями.
				Я смотрел его видео для ознакомления с технологией, например, sass, а затем
				уже искал более подробные источники информации для углубления в суть вопроса.
			</p>
            <p>
                Особенно рекомендую 
				<a href="https://www.youtube.com/watch?v=nxCLXMBl4e4" 
				title="ссылка на ролик" target="_blank"><span>видео по настройке</span>
				</a> 
				классного редактора кода <strong>VS Code</strong> .
                Очень много полезных советов и плагинов!
            </p>`,
		id: 1},
		{message:`<p>	И конечно великолепный курс CS-50 Гарвардского Университета! 
				Рекомендую всем для просмотра! Основы Computer Science в очень увелкательной форме
            <a href="https://www.youtube.com/watch?v=Sy_wba7l1UU&list=PLawfWYMUziZqyUL5QDLVbe3j5BKWj42E5"
                title="Интро курса CS-50" target="_blank"><span>"CS-50"</span>
			</a>.
            </p>`,
		id: 2},
		{message:`<p>	<strong>"Чистый Код"</strong> - Роберт Мартин, 
				<strong>"Грокаем Алгоритмы"</strong> - Адитья Бхаргава, 
                <strong>"Теоретический минимум по Computer Science"</strong> - Владстон Феррейра. <br>
                Три отличные книги, первые две из которых я 100% рекомендую вам преобрести! 
				Они дадут вам понимание алгоритмов
                и написание элегантного, эффективного и лёгкого в сопровождении кода.
                Третья книга это минимум информации по CS, который неплохо было бы знать. 
				(за совет по книгам спасибо Sam Pulzee)
            </p>`,
		id: 3},
	] as Array<RefPageBlockType>,
	jobSearchRefs: [
		{message:`<p>	Хорошее видео с канала wevDev по составлению резюме и 
            <a href="https://www.youtube.com/watch?v=Ds46EE-4DNs" title="ссылка на ролик" target="_blank">
                <span>портфолио на LinkedIn.</span>
			</a>
            </p>`,
		id: 1},
		{message:`<p>	Что, примерно, спрашивают на собеседовании на позицию junior JavaScript/ReactJS разработчика: 
            	видео с канала 
            <a href="https://www.youtube.com/watch?v=YNNSvjIi3SE" title="ссылка на ролик" target="_blank">
                <span>Oldest Junior.</span>
			</a>
            </p>`,
		id: 2},
		{message:`<p>	Рассматриваем более 300 вопросов на собеседование по ReactJS и сопутствующим технологиям 
            <a href="https://github.com/harryheman/React-Questions" title="ссылка на репозиторий" target="_blank">
                <span>в этом репозитории.</span>
			</a>
            </p>`,
		id: 3},
	] as Array<RefPageBlockType>,
}

export type ReferencesPageInitialStateType = typeof referencesPageInitialState
export type BlogPostType = {
	postId: number
	postTitle: string
	postDate: string
	postTextInnerHTML: string
	postVideoInnerHTML: string
}

export const blogPageInitialState = {
	blogPosts: [
		{
			postId: 1,
			postTitle: 'Стартовал поиск работы!',
			postDate: '30 января 2021 года',
			postTextInnerHTML: `Продолжаю интенсивное обучение и уже начал искать работу! Своими впечатлениями 
			я подробно поделился на YouTube-канале <strong>"Пара Слов"</strong>. Смотрите видео, оставляйте 
			свои комментарии и советы, буду очень рад!`,
			postVideoInnerHTML: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dZ3urGvSaAE" frameBorder="0"	allow="accelerometer; autoplay; clipboard-write; encrypted- media; gyroscope; picture-in -picture"	allowFullScreen></iframe>'
		},
		{
			postId: 2,
			postTitle: 'Месяц изучения React.js!',
			postDate: '10 декабря 2020г.',
			postTextInnerHTML: `Это был супер крутой месяц, который доставил мне массу удовольствия во время 
			изучения react.js! Своими впечатлениями я подробно поделился на YouTube-канале 
			<strong>"Пара Слов"</strong>. Смотрите видео, оставляйте свои комментарии и советы, буду очень рад!`,
			postVideoInnerHTML: '<iframe width="560" height="315" src="https://www.youtube.com/embed/FH7bn1xyrzE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>'
		},
		{
			postId: 3,
			postTitle: 'Начал изучение React.js!',
			postDate: '17 ноября 2020г.',
			postTextInnerHTML: `<p>Вчера я наконец то начал изучение библиотеки react.js к которому я шёл первые 2.5 месяца 
				обучения, постигая основы html&css, JavaScript и большого количества дополнительной им, сопутствующей 
				информации и знаний.</p> 
				<p>React полностью перевернул представление о построении сайтов! Это очень интересно и захватывающе 
				разбираться в новой для меня технологии! Конечно программирование на react гораздо более интересно для
				меня чем вёрстка и я сижу за компьютером часами, делая паузы на разминку.</p> 
				Чтож, буду держать вас в курсе моих успехов в react, а так же на страничке "Ссылки" будут все 
				материалы по которым я учился и мои отзывы на них.`,
			postVideoInnerHTML: ''
		},
		{
			postId: 4,
			postTitle: 'Организовал блоки ссылками на html странички',
			postDate: '16 октября 2020г.',
			postTextInnerHTML: `<p>
            Понял, что так дальше жить нельзя.Каждый раз меняя что то в колонках статистики использованного
            времени или в ссылках на материал, или в заголовке, приходилось копировать вручную изменения на все четыре
            страницы
            html кода.Это крайне не удобно и интуитивно я понял, что наверняка есть способ делать ссылки на блоки.
        </p>
				<p>
				Оказалось всё не так просто, как хотелось бы, по крайней мере из тех способов, что нашёл я:)
			Пришлось использовать библиотеку jquery и её функцию load, чтобы сделать ссылки на отдельные блоки моего
            html.
            Насколько я знаю это не оптимальный способ, но пока что для меня важно, что он сработал и я смог в нём
            разобраться.
            Для кого то это наверное смешно, а для меня маленькая победа над организацией и систематизацией моего кода.
        </p>
				<p>
				Не сработал только блок со скриптом...Пока что не смог разобраться почему, но он загубил всю
            страницу. < br > Буду разбираться и да поможет мне священный Google!:)
        </p>`,
			postVideoInnerHTML: ''
		},
		{
			postId: 5,
			postTitle: 'Первая запись в блоге на собственном сайте, после 20 дней обучения html&css',
			postDate: '13 сентября 2020г.',
			postTextInnerHTML: `<p>Ну вот и пришло время тестировать свой собственный сайт и сделать первую запись в блоге. Пока что я
                иду чётко по книге HeadFirst:html&css, делаю похожи сайт на тот, что описан в книге. Так я практикуюсь
                и повторяю пройденный материал. Где-то туплю пока что, но в целом, главное что я могу отметить - это
                интерес к программированию. Мне нравится этим заниматься и я могу проводить за занятиями часы! Сейчас
                для меня - это самый главный показатель будущего успеха (на который я конечно же надеюсь..)</p>`,
			postVideoInnerHTML: ''
		},
		{
			postId: 6,
			postTitle: 'Первый выпуск "Дневника программиста" на моём YouTube-канале',
			postDate: '',
			postTextInnerHTML: `<p>Я рассказал о самом начале своего пути - что я делал с того момента как принял решение изучать
                программирование. С чего начать? Что учить? Как определить сферу программирования, подходящую для вас?
                Такие ответы нашёл для себя я:
                </p>`,
			postVideoInnerHTML: `<iframe width="560" height="315" src="https://www.youtube.com/embed/fOmeUS1ZOW8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>`
		},
		// {
		// 	postId: post id,
		// 	postTitle: 'Post Title',
		// 	postDate: 'Post Date',
		// 	postTextInnerHTML: `Post Text`,
		// 	postVideoInnerHTML: `<iframe>`
		// },
	] as Array<BlogPostType>
}

export type HomePageTextType = {
	message: string
	id: number
}

let initialState = {
	homePageText: [
		{message: 'Идея сменить сферу деятельности пришла ко мне по нескольким причинам. Это был и коронавирус, и усталость от предыдущей сферы, в которой я варился в течении долгих 15 лет. Но главная причина - желание работать мозгом, соображать, учиться новому, решать задачи! Я думаю многие сталкиваются с такой проблемой, что на работе от них требуется лишь механическое выполнение рутинных задач, где мышление включать нужно минимально. И это угнетает, ты не можешь понять: "А для чего я собственно всё это делаю?"', id:1},
		{message: 'Уверен - в программировании тоже есть куча рутинных задач. Но в итоге, ты сам решаешь, остановиться тебе на том комфортном уровне знаний, который даёт тебе возможность выполнять поставленные задачи и зарабатывать на этом деньги или же ты продолжишь развиваться дальше и учиться чему то новому. Хотя, я думаю, что в программировании очень сложно вообще замереть на месте в развитии - эта сфера заставляет тебя быть вечным учеником.', id:2},
		{message: 'И это здорово! Это не даёт мозгу закостенеть и стать неподвижным, не обучаемым. Больше того, это тебе, как человеку, не даёт закостенеть и воспринимать мир лишь со стороны твоего прошлого опыта. А даёт возможность вернуть восприятие мира как невероятно интересного места, где ты вечный ученик.', id:3},
		{message: 'Именно поэтому я решил изучать программирование и начал свой путь 23 августа 2020 года. 13 сентября я запустил этот сайт, написанный с нуля собственными руками, где буду вести дневник и делиться опытом о своём пути. Быть может он окажется кому нибудь полезным. Мне точно - ведь открытый дневник даёт мне дисциплину и мотивацию двигаться по этому пути, халтурить уже не получится :) Так же здесь будет полная статистика по обучению - сколько времени и средств использовано на обучение и все полезные ссылки на материалы, которые будут использованы в обучении.', id:4},
		{message: 'Если вы тоже начинаете свой путь, присоединяйтесь, вместе идти всегда веселее и эффективнее - ощущаешь поддержку со стороны единомышленников. Ведь главная проблема самоучек, как я считаю, - это отсутсвие сообщества единомышленников. Для общения я сделал чат в телеграм t.me/para_slovtg (это телеграм канал из которого можно перейти в чат, нажав внизу "Обсудить")', id:5},
	] as Array<HomePageTextType>
}

export type HomePageInitialStateType = typeof initialState;

const homePageReducer = (state = initialState, action: any): HomePageInitialStateType => {
	switch (action.type) {
		default: 
			return state
	}
}


export default homePageReducer
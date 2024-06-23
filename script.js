let movies = [
	{
		id: 1,
		poster: "https://thumbs.filmix.biz/posters/1222/thumbs/w220/ks5-ja-legenda-2007_2896.jpg",
		name: "Я легенда",
		link: "https://filmix.biz/films/drama/2896-ks5-ja-legenda-2007.html",
		category: "film",
		popular: true
	},
	{
		id: 2,
		poster: "https://thumbs.filmix.biz/posters/2410/thumbs/w220/film-ishodnyy-kod-smotret-onlajn-2011_17492.jpg",
		name: "Исходный код",
		link: "https://filmix.biz/films/triller/17492-film-ishodnyy-kod-smotret-onlajn-2011.html",
		category: "film",
		popular: false
	},
	{
		id: 3,
		poster: "https://thumbs.filmix.biz/posters/3333/thumbs/w220/forsazh-5-race-2011_21411.jpg",
		name: "Форсаж 5",
		link: "https://filmix.biz/films/triller/21411-forsazh-5-race-2011.html",
		category: "film",
		popular: true
	},
	{
		id: 4,
		poster: "https://thumbs.filmix.biz/posters/0649/thumbs/w220/d5656d-gran-buduschego-2014_80990.jpg",
		name: "Грань майбутнього",
		link: "https://filmix.biz/films/fantastiks/80990-d5656d-gran-buduschego-2014.html",
		category: "film",
		popular: false
	},
	{
		id: 5,
		poster: "https://thumbs.filmix.biz/posters/2703/thumbs/w220/1.10-garri-potter-i-dary-smerti-chast-2-2011_19084.jpg",
		name: "Гаррі Поттер та дари смерті: частина 2",
		link: "https://filmix.biz/films/drama/19084-1.10-garri-potter-i-dary-smerti-chast-2-2011.html",
		category: "film",
		popular: true
	},
	{
		id: 6,
		poster: "https://thumbs.filmix.biz/posters/4600/thumbs/w220/kov2-piraty-karibskogo-morya-mertvecy-ne-2017_112573.jpg",
		name: "Пірати Карібського моря: Мерці не россказують казки",
		link: "https://filmix.biz/films/fjuntezia/112573-kov2-piraty-karibskogo-morya-mertvecy-ne-2017.html",
		category: "film",
		popular: true
	},
	{
		id: 7,
		poster: "https://thumbs.filmix.biz/posters/2758/thumbs/w220/varkraft-goow-2016_100284.jpg",
		name: "Варкрафт",
		link: "https://filmix.biz/films/fjuntezia/100284-varkraft-goow-2016.html",
		category: "film",
		popular: false
	},
	{
		id: 8,
		poster: "https://thumbs.filmix.biz/posters/4051/thumbs/w220/kh3-charli-i-shokoladnaya-fabrika-2005_856.jpg",
		name: "Чарлі та шоколадна фабрика",
		link: "https://filmix.biz/films/semejnye/856-kh3-charli-i-shokoladnaya-fabrika-2005.html",
		category: "film",
		popular: false
	},
	{
		id: 9,
		poster: "https://thumbs.filmix.biz/posters/4956/thumbs/w220/avatar-put-vodys-nine-2022_162913.jpg",
		name: "Аватар: дорога води",
		link: "https://filmix.biz/films/fantastiks/162913-avatar-put-vodys-nine-2022.html",
		category: "film",
		popular: false
	},
	{
		id: 10,
		poster: "https://thumbs.filmix.biz/posters/4655/thumbs/w220/dzhohn-uik-3-missk-2019_132022.jpg",
		name: "Джон Уик 3",
		link: "https://filmix.biz/films/triller/132022-dzhohn-uik-3-missk-2019.html",
		category: "film",
		popular: false
	},
	{
		id: 11,
		poster: "https://thumbs.filmix.biz/posters/2208/thumbs/w220/swerhestestvennoe-lux-2020_6379.jpg",
		name: "Supernatural",
		link: "https://filmix.biz/series/drama/6379-swerhestestvennoe-lux-2020.html",
		category: "serials",
		popular: true
	},
	{
		id: 12,
		poster: "https://thumbs.filmix.biz/posters/3222/thumbs/w220/igry-prestolov-w-2021_112983.jpg",
		name: "Гра пристолів",
		link: "https://filmix.biz/series/drama/112983-igry-prestolov-w-2021.html",
		category: "serials",
		popular: false
	},
	{
		id: 13,
		poster: "https://thumbs.filmix.biz/posters/3230/thumbs/w220/doktor-hause-life24-2012_6476.jpg",
		name: "Лікар Хаус",
		link: "https://filmix.biz/series/drama/6476-doktor-hause-life24-2012.html",
		category: "serials",
		popular: true
	},
	{
		id: 14,
		poster: "https://thumbs.filmix.biz/posters/0127/thumbs/w220/dnevniki-vampira-pro-2019_6384.jpg",
		name: "Щоденникі вампіра",
		link: "https://filmix.biz/series/drama/6384-dnevniki-vampira-pro-2019.html",
		category: "serials",
		popular: false
	},
	{
		id: 15,
		poster: "https://thumbs.filmix.biz/posters/0346/thumbs/w220/univer-novaya-obschaga-king-2020_112086.jpg",
		name: "Универ",
		link: "https://filmix.biz/series/komedia/112086-univer-novaya-obschaga-king-2020.html",
		category: "serials",
		popular: false
	},
	{
		id: 16,
		poster: "https://thumbs.filmix.biz/posters/2328/thumbs/w220/kastle-ruta-2016_6483.jpg",
		name: "Касл",
		link: "https://filmix.biz/series/drama/6483-kastle-ruta-2016.html",
		category: "serials",
		popular: false
	},
	{
		id: 17,
		poster: "https://thumbs.filmix.biz/posters/2655/thumbs/w220/kosti-serial-n-2017_112522.jpg",
		name: "Кості",
		link: "https://filmix.biz/series/drama/112522-kosti-serial-n-2017.html",
		category: "serials",
		popular: true
	},
	{
		id: 18,
		poster: "https://thumbs.filmix.biz/posters/1121/thumbs/w220/otchayannoe-domohozyayki-2021_6579.jpg",
		name: "Відчайні домохозяйки",
		link: "https://filmix.biz/series/drama/6579-otchayannoe-domohozyayki-2021.html",
		category: "serials",
		popular: false
	},
	{
		id: 19,
		poster: "https://thumbs.filmix.biz/posters/5608/thumbs/w220/odnazhdy-v-skazke-2018_27460.jpg",
		name: "Колись в казці",
		link: "https://filmix.biz/series/fjuntezia/27460-odnazhdy-v-skazke-2018.html",
		category: "serials",
		popular: false
	},
	{
		id: 20,
		poster: "https://thumbs.filmix.biz/posters/5911/thumbs/w220/vedmak-or-2019_138574.jpg",
		name: "Відьмак",
		link: "https://filmix.biz/series/drama/138574-vedmak-or-2019.html",
		category: "serials",
		popular: false
	},
	{
		id: 21,
		poster: "https://thumbs.filmix.biz/posters/5621/thumbs/w220/kak-priruchit-drakona-shedevr-2010_8054.jpg",
		name: "Як приручіти дракона",
		link: "https://filmix.biz/multes/semejnye/8054-kak-priruchit-drakona-shedevr-2010.html",
		category: "cartons",
		popular: false
	},
	{
		id: 22,
		poster: "https://thumbs.filmix.biz/posters/5458/thumbs/w220/kot-v-sapogah-poshta-2011_27714.jpg",
		name: "Кіт у чоботах",
		link: "https://filmix.biz/multes/fjuntezia/27714-kot-v-sapogah-poshta-2011.html",
		category: "cartons",
		popular: true
	},
	{
		id: 23,
		poster: "https://thumbs.filmix.biz/posters/3031/thumbs/w220/zveropoliss-kinokritik-2016_99439.jpg",
		name: "Зверополіс",
		link: "https://filmix.biz/multes/semejnye/99439-zveropoliss-kinokritik-2016.html",
		category: "cartons",
		popular: false
	},
	{
		id: 24,
		poster: "https://thumbs.filmix.biz/posters/0905/thumbs/w220/5kk-megamozg-2010_11375.jpg",
		name: "Мегамозок",
		link: "https://filmix.biz/multes/semejnye/11375-5kk-megamozg-2010.html",
		category: "cartons",
		popular: true
	},
	{
		id: 25,
		poster: "https://thumbs.filmix.biz/posters/1542/thumbs/w220/14w05w-tayna-koko-2017_117050.jpg",
		name: "Тайна коко",
		link: "https://filmix.biz/multes/music/117050-14w05w-tayna-koko-2017.html",
		category: "cartons",
		popular: false
	},
	{
		id: 26,
		poster: "https://thumbs.filmix.biz/posters/5031/thumbs/w220/rozhdestvenskaya-istoriya-bord-2009_7080.jpg",
		name: "Різдвяна історія",
		link: "https://filmix.biz/multes/drama/7080-rozhdestvenskaya-istoriya-bord-2009.html",
		category: "cartons",
		popular: true
	},
	{
		id: 27,
		poster: "https://thumbs.filmix.biz/posters/4849/thumbs/w220/ultra2-rango-2011_16843.jpg",
		name: "Ранго",
		link: "https://filmix.biz/multes/semejnye/16843-ultra2-rango-2011.html",
		category: "cartons",
		popular: false
	},
	{
		id: 28,
		poster: "https://thumbs.filmix.biz/posters/2543/thumbs/w220/novi-4w-taynaya-zhizn-domashnih-2016_99607.jpg",
		name: "Таємне життя домашніх тварин",
		link: "https://filmix.biz/multes/semejnye/99607-novi-4w-taynaya-zhizn-domashnih-2016.html",
		category: "cartons",
		popular: false
	},
	{
		id: 29,
		poster: "https://thumbs.filmix.biz/posters/3247/thumbs/w220/vpered-mini-2020_135513.jpg",
		name: "Вперед",
		link: "https://filmix.biz/multes/semejnye/135513-vpered-mini-2020.html",
		category: "cartons",
		popular: false
	},
	{
		id: 30,
		poster: "https://thumbs.filmix.biz/posters/0215/thumbs/w220/loraks-ri-2012_37834.jpg",
		name: "Лорокс",
		link: "https://filmix.biz/multes/semejnye/37834-loraks-ri-2012.html",
		category: "cartons",
		popular: false
	},
]

let moviesList = document.querySelector(".movies__list")
let popularBtn = document.querySelector("#popular-btn")
let moviesBtn = document.querySelector("#movies-btn")
let serialsBtn = document.querySelector("#serials-btn")
let cartoonsBtn = document.querySelector("#cartoons-btn")

let popularFilter = movies.filter((el) => el.popular)
let moviesFilter = movies.filter((el) => el.category === "film")
let serialsFilter = movies.filter((el) => el.category === "serials")
let cartonsFilter = movies.filter((el) => el.category === "cartons")

let libraryList = []

function render(list) {
	moviesList.innerHTML = ""

	list.forEach(element => {

		let addedMovie = libraryList.find(el => el.id == element.id)

		console.log(addedMovie)

		moviesList.innerHTML += `
		<div class="movies__list-movie" data-id="${element.id}">
			<img src="${element.poster}">
			<h3>${element.name}</h3>
			<a target="blank" href="${element.link}">Детальніше</a>
			<button class="add-collections ${addedMovie ? "active" : ""}"></button>
		</div>`
	});
}

moviesList.addEventListener("click", (event) => {
	let clickedStar = event.target.closest(".add-collections")

	if (clickedStar) {
		let movieId = clickedStar.parentElement.dataset.id
		let currLibMovieIndex = libraryList.findIndex(el => el.id == movieId)
		if (currLibMovieIndex >= 0) {
			clickedStar.classList.remove("active")
			libraryList.splice(currLibMovieIndex, 1)
			saveMovie()
		} else {
			let currMovie = movies.find(el => el.id == movieId)
			if (currMovie) {
				libraryList.push(currMovie)
				clickedStar.classList.add("active")
				saveMovie()
			}
		}
	}
})

function saveMovie() {
	localStorage.setItem("movie-Marko", JSON.stringify(libraryList))
}

function getMovie() {
	let data = JSON.parse(localStorage.getItem("movie-Marko"))

	if (data) {
		libraryList = data
	}
}

getMovie()

popularBtn.addEventListener("click", () => {
	removeActiveClasses()
	render(popularFilter)
	popularBtn.classList.add("active")
})

moviesBtn.addEventListener("click", () => {
	removeActiveClasses()
	render(moviesFilter)
	moviesBtn.classList.add("active")
})

serialsBtn.addEventListener("click", () => {
	removeActiveClasses()
	render(serialsFilter)
	serialsBtn.classList.add("active")
})

cartoonsBtn.addEventListener("click", () => {
	removeActiveClasses()
	render(cartonsFilter)
	cartoonsBtn.classList.add("active")
})

function removeActiveClasses() {
	popularBtn.classList.remove("active")
	moviesBtn.classList.remove("active")
	serialsBtn.classList.remove("active")
	cartoonsBtn.classList.remove("active")
}


render(popularFilter)
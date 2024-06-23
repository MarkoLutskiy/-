let libraryList = []
let libraryListContainer = document.querySelector(".library__list")

function saveMovie() {
	localStorage.setItem("movie-Marko", JSON.stringify(libraryList))
}

function getMovie() {
	let data = JSON.parse(localStorage.getItem("movie-Marko"))

	if (data) {
		libraryList = data
		render(libraryList)
	}
}

getMovie()

libraryListContainer.addEventListener("click", (event) => {
	let clickedStar = event.target.closest(".add-collections")

	if (clickedStar) {
		let movieId = clickedStar.parentElement.dataset.id
		let currLibMovieIndex = libraryList.findIndex(el => el.id == movieId)
		if (currLibMovieIndex >= 0) {
			clickedStar.classList.remove("active")
			libraryList.splice(currLibMovieIndex, 1)
			saveMovie()
			render(libraryList)
		}
	}
})

function render(list) {
	libraryListContainer.innerHTML = ""

	list.forEach(element => {
		libraryListContainer.innerHTML += `
		<div class="movies__list-movie" data-id="${element.id}">
			<img src="${element.poster}">
			<h3>${element.name}</h3>
			<a target="blank" href="${element.link}">Детальніше</a>
			<button class="add-collections active"></button>
		</div>`
	});
}
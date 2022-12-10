// Core function (aka Helper Function)
const fetchMovies = (url, dom_element, path_type) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            showMovies(data, dom_element, path_type)
        })
        .catch((error) => {
            throw new Error(error)
        })

}


const showMovies = (movies, dom_element, path_type) => {
    let moviesElement = document.querySelector(dom_element)

    for (const movie of movies.results) {
        let imageElement = document.createElement("img")

        imageElement.setAttribute("data-id", movie.id)

        imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`

        moviesElement.appendChild(imageElement)
    }
}

fetchMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1', ".original__movies", "poster_path")
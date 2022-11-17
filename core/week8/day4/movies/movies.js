const data = require('./movies.json')

const getMovies = () => data.movies

const getMoviesByGenre = (genre) => 
    data.movies
        .filter((movie) => movie.genres
            .map((g) => g.toLowerCase())
            .includes(genre.toLowerCase())
        )

const getMovieByTitle = (title) =>
    data.movies
        .find(movie => movie.title.toLowerCase() === title.toLowerCase())

module.exports = { 
    getMovies,
    getMoviesByGenre,
    getMovieByTitle
};
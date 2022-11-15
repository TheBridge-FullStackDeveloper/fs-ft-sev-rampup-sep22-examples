const data = require('./movies.json')

const getMovies = () => data.movies

const getMoviesByGenre = (genre) => 
    data.movies
        .filter((movie) => movie.genres
            .map((g) => g.toLowerCase())
            .includes(genre.toLowerCase())
        )

module.exports = { 
    getMovies,
    getMoviesByGenre
};
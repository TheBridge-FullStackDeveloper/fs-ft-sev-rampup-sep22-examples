const data = require('./movies.json')

const getGenres = () => data.genres.map(g => g.toLowerCase())

module.exports = { getGenres }



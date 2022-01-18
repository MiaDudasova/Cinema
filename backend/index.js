const movies = require('./movies.json')
const express = require('express')
const cors = require('cors')
const cinemas = require('./cinemas.json') 

const app = express()
app.use(cors())

app.get('/movies', (req, res) => {
  if(!!req.query.search) {
    const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(req.query.search.toLowerCase()))

    res.send(filteredMovies)
  }

  res.send(movies)
})

app.get('/cinemas', (req, res) => {
  if(!!req.query.search) {
    const filteredCinemas = cinemas.filter(cinema => cinema.name.toLowerCase().includes(req.query.search.toLowerCase()))

    res.send(filteredCinemas)
  }

  res.send(cinemas)
})

app.listen(3010, () => console.log('object'))
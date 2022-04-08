const movies = require('./movies.json')
const express = require('express')
const cors = require('cors')
const cinemas = require('./cinemas.json') 
const actors = require("./actors.json")

const app = express()
app.use(cors())

app.get('/movies', (req, res) => {
  const queryy = req.query.search.toLowerCase()
  if(!!req.query.search) {
    const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(queryy))

    res.send(filteredMovies)
  }

  res.send(movies)
})

app.get('/actors', (req, res) => {
  if(!!req.query.movieid) {
    const filteredMovieActors = movies.filter(movies => movies.id == Number(req.query.movieid))
    const filteredActor = actors.filter(actors => filteredMovieActors[0].actors.includes(actors.id))
    res.send(filteredActor)
  }
})

app.get('/actor', (req, res) => {
  if(!!req.query.actorid) {
    const filteredActor = actors.filter(actors => actors.id == Number(req.query.actorid))
    res.send(filteredActor)
  }
})

app.get('/cinemas', (req, res) => {
  if(!!req.query.search) {
    const filteredCinemas = cinemas.filter(cinema => cinema.name.toLowerCase().includes(req.query.search.toLowerCase()))

    res.send(filteredCinemas)
  }

  res.send(cinemas)
})

app.get('/cinema', (req, res) => {
  if(!!req.query.cinemaid) {
    const filteredCinemas = cinemas.filter(cinema => cinema.id == Number(req.query.cinemaid))
    
    res.send(filteredCinemas)
  }
})

app.get("/movies/movie",(req, res) => {
  if(!!req.query.movieid) {
    const filteredMovies = movies.filter(movies => movies.id == Number(req.query.movieid))

    res.send(filteredMovies)
  }
  res.send(movies)
})

app.listen(3010, () => console.log("object"))
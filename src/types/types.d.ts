export type Movie = {
  id: string
  name: string
  desc: string
  img: string
  rating: number
  length: number
  price: number
  genre: string
  director: string
  actors: number[]
  cinemas: number[]
}

export type IMDBFilm = {
  id: string
  title: string
  imDbRating: string
  actorList: IActor[]
  directors: string
  image: string
  plot: string
}

export type ActorId = {
  id: string
  resultType: string
  image: string
  title: string
  description: string
}

export type Actor = {
  id: number
  name: string
  age: number
  img: string
  desc: string
}

export type IMDBActor = {
  id: string
  name: string
  image: string
  knownFor: string
  role: string
  summary: string
  birthDate: string
}

export type IActor = {
  asCharacter: string
  id: string
  image: string
  name: string
}

export type Cinema = {
  id: number
  name: string
  city: string
  openingHours: string
}

export type Order = {
  filmId: string
  price: number
  quantity: number
  cinema: number
}

export type User = {
  userId: number
  name: string
  mail: string
  img: string
  orders: order[]
}

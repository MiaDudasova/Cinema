export type Movie = {
  id: number
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

export type Actor = {
  id: number
  name: string
  age: number
  img: string
  desc: string
}

export type Cinema = {
  id: number
  name: string
  city: string
  openingHours: string
}

export type Order = {
  filmId: number
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

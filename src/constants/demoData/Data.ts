import { Actor, Cinema, Movie, User } from 'types/types'

export const MOVIES: Movie[] = [
  {
    id: 1,
    name: 'Interstellar',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel mauris dui. Aliquam convallis tempor sem, eget varius ligula consectetur eu. In tortor ligula, scelerisque nec metus id, fringilla placerat leo. Integer in egestas tellus. Vivamus bibendum egestas dolor, ac placerat ex rutrum venenatis. Duis ornare dignissim porta. Aliquam quis nisi vitae dui elementum lacinia. Sed quis velit faucibus, feugiat ex quis, pretium nulla.',
    img: 'https://img.csfd.cz/files/images/film/posters/159/467/159467552_0cd8c7.jpg',
    rating: 4.3,
    length: 169,
    price: 5,
    genre: 'Adventure',
    director: 'Christopher Nolan',
    actors: [1, 2, 3, 4, 5],
    cinemas: [1, 2],
  },
  {
    id: 2,
    name: 'The Stepfather',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel mauris dui. Aliquam convallis tempor sem, eget varius ligula consectetur eu. In tortor ligula, scelerisque nec metus id, fringilla placerat leo. Integer in egestas tellus. Vivamus bibendum egestas dolor, ac placerat ex rutrum venenatis. Duis ornare dignissim porta. Aliquam quis nisi vitae dui elementum lacinia. Sed quis velit faucibus, feugiat ex quis, pretium nulla.',
    img: 'https://m.media-amazon.com/images/M/MV5BMTQ3ODU5OTUwMl5BMl5BanBnXkFtZTcwOTczNDU2Mg@@._V1_FMjpg_UX1000_.jpg',
    rating: 2.6,
    length: 101,
    price: 5,
    genre: 'Thriller',
    director: 'Nelson McCormick',
    actors: [6, 7, 8],
    cinemas: [1, 2],
  },
  {
    id: 3,
    name: 'Home Alone',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel mauris dui. Aliquam convallis tempor sem, eget varius ligula consectetur eu. In tortor ligula, scelerisque nec metus id, fringilla placerat leo. Integer in egestas tellus. Vivamus bibendum egestas dolor, ac placerat ex rutrum venenatis. Duis ornare dignissim porta. Aliquam quis nisi vitae dui elementum lacinia. Sed quis velit faucibus, feugiat ex quis, pretium nulla.',
    img: 'https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    rating: 3.8,
    length: 103,
    price: 5,
    genre: 'Comedy',
    director: 'Chris Columbus',
    actors: [9, 10, 11],
    cinemas: [1, 2],
  },
  {
    id: 4,
    name: 'Inception',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel mauris dui. Aliquam convallis tempor sem, eget varius ligula consectetur eu. In tortor ligula, scelerisque nec metus id, fringilla placerat leo. Integer in egestas tellus. Vivamus bibendum egestas dolor, ac placerat ex rutrum venenatis. Duis ornare dignissim porta. Aliquam quis nisi vitae dui elementum lacinia. Sed quis velit faucibus, feugiat ex quis, pretium nulla.',
    img: 'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg',
    rating: 4.4,
    length: 148,
    price: 5,
    genre: 'Action',
    director: 'Christopher Nolan',
    actors: [12, 13, 14],
    cinemas: [1, 2],
  },
  {
    id: 5,
    name: 'Grown Ups',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel mauris dui. Aliquam convallis tempor sem, eget varius ligula consectetur eu. In tortor ligula, scelerisque nec metus id, fringilla placerat leo. Integer in egestas tellus. Vivamus bibendum egestas dolor, ac placerat ex rutrum venenatis. Duis ornare dignissim porta. Aliquam quis nisi vitae dui elementum lacinia. Sed quis velit faucibus, feugiat ex quis, pretium nulla.',
    img: 'https://m.media-amazon.com/images/M/MV5BMjA0ODYwNzU5Nl5BMl5BanBnXkFtZTcwNTI1MTgxMw@@._V1_.jpg',
    rating: 3,
    length: 102,
    price: 5,
    genre: 'Comedy',
    director: 'Dennis Dugan',
    actors: [15, 16, 17],
    cinemas: [1, 2],
  },
  {
    id: 6,
    name: 'Central Intelligence',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel mauris dui. Aliquam convallis tempor sem, eget varius ligula consectetur eu. In tortor ligula, scelerisque nec metus id, fringilla placerat leo. Integer in egestas tellus. Vivamus bibendum egestas dolor, ac placerat ex rutrum venenatis. Duis ornare dignissim porta. Aliquam quis nisi vitae dui elementum lacinia. Sed quis velit faucibus, feugiat ex quis, pretium nulla.',
    img: 'https://m.media-amazon.com/images/M/MV5BMjA2NzEzNjIwNl5BMl5BanBnXkFtZTgwNzgwMTEzNzE@._V1_.jpg',
    rating: 3.2,
    length: 107,
    price: 5,
    genre: 'Action',
    director: 'Rawson Marshall Thurber',
    actors: [18, 19, 20],
    cinemas: [1, 2, 3],
  },
  {
    id: 7,
    name: 'Red Notice',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel mauris dui. Aliquam convallis tempor sem, eget varius ligula consectetur eu. In tortor ligula, scelerisque nec metus id, fringilla placerat leo. Integer in egestas tellus. Vivamus bibendum egestas dolor, ac placerat ex rutrum venenatis. Duis ornare dignissim porta. Aliquam quis nisi vitae dui elementum lacinia. Sed quis velit faucibus, feugiat ex quis, pretium nulla.',
    img: 'https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    rating: 3.2,
    length: 118,
    price: 5,
    genre: 'Action',
    director: 'Rawson Marshall Thurber',
    actors: [18, 21, 22],
    cinemas: [1, 2],
  },
  {
    id: 8,
    name: 'Edge of Tomorrow',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel mauris dui. Aliquam convallis tempor sem, eget varius ligula consectetur eu. In tortor ligula, scelerisque nec metus id, fringilla placerat leo. Integer in egestas tellus. Vivamus bibendum egestas dolor, ac placerat ex rutrum venenatis. Duis ornare dignissim porta. Aliquam quis nisi vitae dui elementum lacinia. Sed quis velit faucibus, feugiat ex quis, pretium nulla.',
    img: 'https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_.jpg',
    rating: 3.9,
    length: 113,
    price: 5,
    genre: 'Action',
    director: 'Rawson Marshall Thurber',
    actors: [23, 24, 25],
    cinemas: [1, 2],
  },
]

export const ACTORS: Actor[] = [
  {
    id: 1,
    name: 'Matthew McConaughey',
    age: 52,
    img: 'https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 2,
    name: 'Anne Hathaway',
    age: 39,
    img: 'https://m.media-amazon.com/images/M/MV5BMTRhNzQ3NGMtZmQ1Mi00ZTViLTk3OTgtOTk0YzE2YTgwMmFjXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_UY317_CR20,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 3,
    name: 'Jessica Chastain',
    age: 44,
    img: 'https://m.media-amazon.com/images/M/MV5BMTU1MDM5NjczOF5BMl5BanBnXkFtZTcwOTY2MDE4OA@@._V1_UX214_CR0,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 4,
    name: 'Mackenzie Foy',
    age: 21,
    img: 'https://m.media-amazon.com/images/M/MV5BYTIyMzExODgtNzllNy00OWQwLTlhM2QtMWU1ZTI2MjgwMTQxXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY317_CR6,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 5,
    name: 'Ellen Burstyn',
    age: 89,
    img: 'https://m.media-amazon.com/images/M/MV5BMTU4MjYxMDc3MF5BMl5BanBnXkFtZTYwNzU3MDIz._V1_UX214_CR0,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 6,
    name: 'Penn Badgley',
    age: 35,
    img: 'https://m.media-amazon.com/images/M/MV5BMTc0NjI2Nzg4M15BMl5BanBnXkFtZTcwODE3OTcxNA@@._V1_UX214_CR0,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 7,
    name: 'Dylan Walsh',
    age: 58,
    img: 'https://m.media-amazon.com/images/M/MV5BMTg1MDMwMDA2NF5BMl5BanBnXkFtZTcwODc3NDA5Mg@@._V1_UY317_CR2,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 8,
    name: 'Sela Ward',
    age: 65,
    img: 'https://m.media-amazon.com/images/M/MV5BMTc0NjI2Nzg4M15BMl5BanBnXkFtZTcwODE3OTcxNA@@._V1_UX214_CR0,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 9,
    name: 'Macaulay Culkin',
    age: 41,
    img: 'https://m.media-amazon.com/images/M/MV5BMTM1NzUwMjY2M15BMl5BanBnXkFtZTcwOTI5MTMyMw@@._V1_UX214_CR0,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 10,
    name: 'Joe Pesci',
    age: 78,
    img: 'https://m.media-amazon.com/images/M/MV5BMzc3MTcxNDYxNV5BMl5BanBnXkFtZTcwOTI3NjE1Mw@@._V1_UX214_CR0,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 11,
    name: 'Daniel Stern',
    age: 64,
    img: 'https://m.media-amazon.com/images/M/MV5BMTI3NTcwNDcxMF5BMl5BanBnXkFtZTcwMTI3Mjc4Mg@@._V1_UY317_CR10,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 12,
    name: 'Leonardo DiCaprio',
    age: 47,
    img: 'https://m.media-amazon.com/images/M/MV5BMTI3NTcwNDcxMF5BMl5BanBnXkFtZTcwMTI3Mjc4Mg@@._V1_UY317_CR10,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 13,
    name: 'Joseph Gordon-Levitt',
    age: 40,
    img: 'https://m.media-amazon.com/images/M/MV5BMTY3NTk0NDI3Ml5BMl5BanBnXkFtZTgwNDA3NjY0MjE@._V1_UY317_CR3,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 14,
    name: 'Elliot Page',
    age: 34,
    img: 'https://m.media-amazon.com/images/M/MV5BYWY0NzFmYjAtYzMwNC00ODc3LWI2ZWEtOTU3YTM0Y2ZiNTM5XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UY317_CR11,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 15,
    name: 'Adam Sandler',
    age: 55,
    img: 'https://m.media-amazon.com/images/M/MV5BMjQyNzM2MjM1Ml5BMl5BanBnXkFtZTcwMDE5NjI3Mg@@._V1_UY317_CR7,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 16,
    name: 'Salma Hayek',
    age: 55,
    img: 'https://m.media-amazon.com/images/M/MV5BMzkyMTk2NzM2Ml5BMl5BanBnXkFtZTcwNDQ4MjYzMg@@._V1_UY317_CR5,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 17,
    name: 'Kevin James',
    age: 56,
    img: 'https://m.media-amazon.com/images/M/MV5BMTUyMTU1ODU4Ml5BMl5BanBnXkFtZTcwNDQ0NTY5NQ@@._V1_UY317_CR8,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 18,
    name: 'Dwayne Johnson',
    age: 49,
    img: 'https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UX214_CR0,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 19,
    name: 'Kevin Hart',
    age: 42,
    img: 'https://m.media-amazon.com/images/M/MV5BMTY4OTAxMjkxN15BMl5BanBnXkFtZTgwODg5MzYyMTE@._V1_UX214_CR0,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 20,
    name: 'Danielle Nicolet',
    age: 48,
    img: 'https://m.media-amazon.com/images/M/MV5BYmRhMGI2MTAtNGQ3MC00MTk5LWExMGEtYjYyODRkNjE4ZWQ1XkEyXkFqcGdeQXVyMDE4NTY1Mw@@._V1_UY317_CR8,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 21,
    name: 'Ryan Reynolds',
    age: 45,
    img: 'https://m.media-amazon.com/images/M/MV5BOTI3ODk1MTMyNV5BMl5BanBnXkFtZTcwNDEyNTE2Mg@@._V1_UY317_CR6,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 22,
    name: 'Gal Gadot',
    age: 36,
    img: 'https://m.media-amazon.com/images/M/MV5BYThjM2NlOTItYTUzMC00ODE3LTk1MTItM2I3MDViY2U3MThlXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR20,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 23,
    name: 'Tom Cruise',
    age: 59,
    img: 'https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY317_CR14,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 24,
    name: 'Emily Blunt',
    age: 38,
    img: 'https://m.media-amazon.com/images/M/MV5BMTUxNDY4MTMzM15BMl5BanBnXkFtZTcwMjg5NzM2Ng@@._V1_UX214_CR0,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
  {
    id: 25,
    name: 'Bill Paxton',
    age: 61,
    img: 'https://m.media-amazon.com/images/M/MV5BNjY2NTQwOTAyNV5BMl5BanBnXkFtZTcwNTUyNjYwMw@@._V1_UY317_CR8,0,214,317_AL_.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur at lorem vitae egestas. Pellentesque consequat, ligula vitae bibendum ornare, nibh mi condimentum diam, vel.',
  },
]

export const CINEMAS: Cinema[] = [
  {
    id: 1,
    name: 'Cinema City',
    city: 'Bratislava',
    openingHours: '13:00 - 22:00',
  },
  {
    id: 2,
    name: 'CineMax',
    city: 'Bratislava',
    openingHours: '14:00 - 20:00',
  },
  {
    id: 3,
    name: 'Aupark',
    city: 'Košice',
    openingHours: '12:30 - 23:00',
  },
]

export const USER: User = 
  {
    userId: 1,
    name: 'Matej',
    mail: 'matej.mb97@gmail.com',
    img: '',
    orders: [],
  }

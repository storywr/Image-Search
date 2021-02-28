export interface Item {
  id: string
  category: string
  name: string
  likes: number
  favorites: number
  tags: string
  webformatURL: string
  largeImageURL: string
}

export interface Order {
  number: number
}
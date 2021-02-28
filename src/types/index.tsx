export interface Item {
  id: string
  category: string
  name: string
  likes: number
  favorites: number
  webformatURL: string
  tags: string[]
}

export interface Order {
  number: number
}
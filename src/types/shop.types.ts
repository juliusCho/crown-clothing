import { LinkUrlEnum } from './section.types'

export type ItemType = {
  id: number
  name: string
  imageUrl: string
  price: number
}

export enum ShopTitleEnum {
  hats = 'Hats',
  jackets = 'Jackets',
  sneakers = 'Sneakers',
  womens = 'Womens',
  mens = 'Mens',
}

export type ShopType = {
  id: number
  title: ShopTitleEnum
  routeName: LinkUrlEnum
  items: ItemType[]
}

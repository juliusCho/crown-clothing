export enum SizeEnum {
  LARGE = 'large',
}

export enum LinkUrlEnum {
  HATS = 'shop/hats',
  JACKETS = 'shop/jackets',
  SNEAKERS = 'shop/sneakers',
  WOMENS = 'shop/womens',
  MENS = 'shop/mens',
}

export type SectionType = {
  title: string
  imageUrl: string
  size?: SizeEnum
  id: number
  linkUrl: LinkUrlEnum
}

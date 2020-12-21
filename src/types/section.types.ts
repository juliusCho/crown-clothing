export enum SizeEnum {
  LARGE = 'large',
}

export enum LinkUrlEnum {
  HATS = 'hats',
  JACKETS = 'jackets',
  SNEAKERS = 'sneakers',
  WOMENS = 'womens',
  MENS = 'mens',
  SHOP = 'shop',
}

export type SectionType = {
  title: string
  imageUrl: string
  size?: SizeEnum
  id: number
  linkUrl: LinkUrlEnum
}

import { LinkUrlEnum, SectionType, SizeEnum } from '../types/section.types'

export const InitialSectionData: SectionType[] = [
  {
    title: 'hats',
    imageUrl: '/images/hats.png',
    id: 1,
    linkUrl: LinkUrlEnum.HATS,
  },
  {
    title: 'jackets',
    imageUrl: '/images/jackets.png',
    id: 2,
    linkUrl: LinkUrlEnum.JACKETS,
  },
  {
    title: 'sneakers',
    imageUrl: '/images/sneakers.png',
    id: 3,
    linkUrl: LinkUrlEnum.SNEAKERS,
  },
  {
    title: 'womens',
    imageUrl: '/images/womens.png',
    size: SizeEnum.LARGE,
    id: 4,
    linkUrl: LinkUrlEnum.WOMENS,
  },
  {
    title: 'mens',
    imageUrl: '/images/men.png',
    size: SizeEnum.LARGE,
    id: 5,
    linkUrl: LinkUrlEnum.MENS,
  },
]

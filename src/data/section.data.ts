import { LinkUrlEnum, SectionType, SizeEnum } from '../types/section.types'

export const InitialSectionData: SectionType[] = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
    linkUrl: LinkUrlEnum.HATS,
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2,
    linkUrl: LinkUrlEnum.JACKETS,
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: LinkUrlEnum.SNEAKERS,
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: SizeEnum.LARGE,
    id: 4,
    linkUrl: LinkUrlEnum.WOMENS,
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: SizeEnum.LARGE,
    id: 5,
    linkUrl: LinkUrlEnum.MENS,
  },
]

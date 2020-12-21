import React from 'react'
import { ItemType } from '../../types/shop.types'
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'

const MAX_ITEM_CNT = 4

type Props = {
  title: string
  items: ItemType[]
}

export default function CollectionPreview({ title, items }: Props) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < MAX_ITEM_CNT)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} id={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  )
}

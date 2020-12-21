import React from 'react'
import './collection-item.styles.scss'

type Props = {
  id: number
  name: string
  price: number
  imageUrl: string
}

export default function CollectionItem({ id, name, price, imageUrl }: Props) {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}
